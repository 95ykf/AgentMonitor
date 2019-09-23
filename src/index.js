import './assets/js/ie9';
import {MessageID, NotReadyReason} from './constants';
import {AgentMonitorComponent} from './view/AgentMonitorComponent';
import AgentMonitorInfo from './model/AgentMonitorInfo';
import AgentInfo from './model/AgentInfo';
import utils from './utils/utils';
import './css/common.css';
import './css/tabs.css';
import './css/agent_monitor.css';

/**
 * 坐席监控主程序入口
 */
class AgentMonitor {

    /**
     * 构建坐席监控及核心业务
     * 监控分为两种构造模式：
     * 1、依赖话条组件对象，核心业务中检查发现配置了话条组件，默认调用话条相应方法实现监控功能，适用于已经使用PhoneBar组件定制话条的情况。
     * 2、不依赖话条，核心业务对外抛出接口，由对接方实现具体业务，适用于老版本话条或者没有话条的情况。
     *
     * @param renderTo    页面元素id，渲染到指定元素内
     * @param phoneBar    话条组件对象，可为空
     * @param thisDN      坐席分机号，当不使用话条组件时此属性必填
     * @param agentID     坐席工号，当不使用话条组件时此属性必填
     * @param timeOffset  服务器与本地时间偏移量，默认0，单位毫秒
     */
    constructor({
                    renderTo = '',
                    phoneBar,

                    thisDN,
                    agentID,

                    timeOffset = 0,

                    customNotReadyReason = [],
                }) {
        this._renderTo = renderTo;
        this._phoneBarExists = false;
        if (phoneBar) {
            this._phoneBarExists = true;
            this._phoneBar = phoneBar;
            this._connection = this._phoneBar.connection;
            this._api = this._phoneBar.agentApi;
            this.thisDN = this._phoneBar.agent.thisDN;
            this.agentID = this._phoneBar.agent.agentID;
            this.init();
        } else {
            this.thisDN = thisDN;
            this.agentID = agentID;
        }
        /**
         * 服务器与本地时间偏移量，单位毫秒
         */
        this._timeOffset = timeOffset;

        AgentInfo.setCustomNotReadyReason(customNotReadyReason);
    }

    /**
     * 初始化
     */
    init() {
        // 服务器时间同步
        this._connection.ping();
        this._connection.once(MessageID.EventPong, (msg) => {
            this.setTimeOffset(new Date().getTime() - msg.creationTime);
            this._api.requestMonitorMembers();
        });

        this._connection.on(MessageID.EventMonitorAgentList, (msg) => {
            this.setMonitorMembers(msg.monitorGroupList)
        });
        this._connection.on(MessageID.EventAgentInfo, (msg) => {
            this.updateAgentInfo(msg)
        });
    }

    /**
     * 设置监控成员
     * @param monitorGroupList
     */
    setMonitorMembers(monitorGroupList) {
        this.agentMonitorInfo = new AgentMonitorInfo();
        this.agentMonitorInfo.processPacket(monitorGroupList);
        this._agentMonitorComponent = new AgentMonitorComponent({
            agentMonitorInfo: this.agentMonitorInfo,
            onStateMenuClick: this.onStateMenuClick.bind(this),
            onOperateMenuClick: this.onOperateMenuClick.bind(this),
        }).create();
        document.querySelector(`#${this._renderTo}`).appendChild(this._agentMonitorComponent.rootNode);
        this._agentMonitorComponent.show();
        this.startAgentsMonitoring([...this.agentMonitorInfo.agents.values()].map(v => v.agentDN));
    }

    /**
     * 变更监控的坐席信息
     * @param agentInfo
     */
    updateAgentInfo(agentInfo) {
        // 根据时间偏移量调整状态开始时间
        if (agentInfo && agentInfo.creationTime) {
            agentInfo.creationTime += this._timeOffset;
        }
        this.agentMonitorInfo.updateAgent(agentInfo);
    }

    /**
     * 状态按钮点击事件处理
     * @param action
     * @param agentInfo
     */
    onStateMenuClick(action, agentInfo) {
        if (action === 'ready') {
            this.agentReadyM(agentInfo.agentDN);
        } else if (action === 'busy') {
            this.agentNotReadyM(agentInfo.agentDN, NotReadyReason.BUSY);
        } else if (action === 'rest') {
            this.agentNotReadyM(agentInfo.agentDN, NotReadyReason.RESTING);
        }
    }

    /**
     * 操作按钮点击事件处理
     * @param action
     * @param agentInfo
     */
    onOperateMenuClick(action, agentInfo) {
        if (action === 'monitor') {
            this.doMonitorCall(agentInfo);
        } else if (action === 'substitute') {
            this.doSubstitute(agentInfo);
        } else if (action === 'interrupt') {
            this.doInterruptCall(agentInfo);
        } else if (action === 'hangup') {
            this.doReleaseCall(agentInfo);
        }
    }

    /**
     * 监听
     * @param agentInfo
     * @returns {boolean}
     */
    doMonitorCall(agentInfo) {
        if (agentInfo.state === AgentInfo.TALKING || agentInfo.state === AgentInfo.DIALING) {
            if (agentInfo.agentDN === this.thisDN) {
                utils.showMessage('不能监听自己！');
                return false;
            } else {
                this.monitorCall(agentInfo.callID, agentInfo.agentDN);
                // 开始监听，并打开 应答 按钮
                //this._phoneBar.changeButtonWhenRinging();
            }
        } else {
            utils.showMessage('当前坐席未在通话!');
            return false;
        }
    }

    /**
     * 强插
     * @param agentInfo
     * @returns {boolean}
     */
    doInterruptCall(agentInfo) {
        if (agentInfo.state === AgentInfo.TALKING || agentInfo.state === AgentInfo.DIALING) {
            if (agentInfo.agentDN === this.thisDN) {
                utils.showMessage('不能强插自己！');
                return false;
            } else {
                this.interruptCall(agentInfo.callID, agentInfo.agentDN, agentInfo.otherDN);
            }
        } else {
            utils.showMessage('当前坐席未在通话!');
            return false;
        }
    }

    /**
     * 拦截
     * @param agentInfo
     * @returns {boolean}
     */
    doSubstitute(agentInfo) {
        if (agentInfo.state === AgentInfo.TALKING || agentInfo.state === AgentInfo.DIALING) {
            if (agentInfo.agentDN === this.thisDN) {
                utils.showMessage('不能拦截自己！');
                return false;
            } else {
                this.substitute(agentInfo.callID, agentInfo.agentDN, agentInfo.otherDN);
            }
        } else {
            utils.showMessage('当前坐席未在通话!');
            return false;
        }
    }

    /**
     * 挂断
     * @param agentInfo
     * @returns {boolean}
     */
    doReleaseCall(agentInfo) {
        if (agentInfo.state === AgentInfo.TALKING || agentInfo.state === AgentInfo.DIALING) {
            if (agentInfo.agentDN === this.thisDN) {
                utils.showMessage('不要在此处挂断自己！');
                return false;
            } else {
                this.releaseAgentCall(agentInfo.callID, agentInfo.agentDN);
            }
        } else {
            utils.showMessage('当前坐席未在通话!');
            return false;
        }
    }

    /**
     * 设置时间偏移量
     * @param offset
     */
    setTimeOffset(offset) {
        this._timeOffset = offset;
    }



    //---------------对第三方开放接口------------------------
    /**
     * 开始监控坐席
     * @param agentDNs
     */
    startAgentsMonitoring(agentDNs) {
        !this._phoneBarExists || this._api.startAgentsMonitoring(agentDNs);
    }

    /**
     * 设置坐席状态为就绪状态
     * @param agentDN
     */
    agentReadyM(agentDN) {
        !this._phoneBarExists || this._api.agentReadyM(agentDN);
    }

    /**
     * 设置坐席状态为非就绪状态
     * @param agentDN
     * @param reason  非就绪状态原因
     */
    agentNotReadyM(agentDN, reason) {
        !this._phoneBarExists || this._api.agentNotReadyM(agentDN, reason);
    }

    /**
     * 监听
     * @param callID
     * @param agentDN
     */
    monitorCall(callID, agentDN) {
        !this._phoneBarExists || this._api.monitorCall(callID, agentDN);
    }

    /**
     * 强插
     * @param callID
     * @param agentDN
     * @param otherDN
     */
    interruptCall(callID, agentDN, otherDN) {
        !this._phoneBarExists || this._api.doInterruptCall(callID, agentDN, otherDN);
    }

    /**
     * 拦截
     * @param callID
     * @param agentDN
     * @param otherDN
     */
    substitute(callID, agentDN, otherDN) {
        !this._phoneBarExists || this._api.substitute(callID, agentDN, otherDN);
    }

    /**
     * 挂断电话
     * @param callID
     * @param agentDN
     */
    releaseAgentCall(callID, agentDN) {
        !this._phoneBarExists || this._api.releaseAgentCall(callID, agentDN);
    }
}

export default AgentMonitor;
