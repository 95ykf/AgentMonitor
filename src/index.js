import './assets/js/ie9';
import {MessageID, NotReadyReason} from './constants';
import {AgentMonitorComponent} from './view/AgentMonitorComponent';
import AgentMonitorInfo from './model/AgentMonitorInfo';
import AgentInfo from './model/AgentInfo';
import utils from './utils/utils';
import './css/agent_monitor.css';

class AgentMonitor {
    constructor({
                    renderTo= '',
                    phoneBar,
                }) {
        this._renderTo = renderTo;
        this._phoneBar = phoneBar;
        this._agent = this._phoneBar.agent;
        this._connection = this._phoneBar.connection;
        this.api = this._phoneBar.agentApi;
        this.init();
    }

    /**
     * 初始化
     */
    init() {
        this.api.requestMonitorMembers();
        this._connection.on(MessageID.EventMonitorAgentInfo, (msg) => {this.handleMonitorMemberEvent(msg.monitorGroupList)});
        this._connection.on(MessageID.EventAgentInfo, (msg) => {this.agentMonitorInfo.updateAgent(msg)});
    }

    /**
     * 处理监控成员查询响应事件
     * @param monitorGroupList
     */
    handleMonitorMemberEvent(monitorGroupList) {
        this.agentMonitorInfo = new AgentMonitorInfo();
        this.agentMonitorInfo.processPacket(monitorGroupList);
        this._agentMonitorComponent = new AgentMonitorComponent({
            agentMonitorInfo: this.agentMonitorInfo,
            onStateMenuClick: this.onStateMenuClick.bind(this),
            onOperateMenuClick: this.onOperateMenuClick.bind(this),
        }).create();
        document.querySelector(`#${this._renderTo}`).appendChild(this._agentMonitorComponent.rootNode);
        this._agentMonitorComponent.show();
        this.api.startAgentsMonitoring([...this.agentMonitorInfo.agents.values()].map(v => {return v.agentDN}));
    }

    /**
     * 状态按钮点击事件处理
     * @param action
     * @param agentInfo
     */
    onStateMenuClick(action, agentInfo) {
        if (action === 'ready') {
            this.api.agentReadyM(agentInfo.agentDN);
        } else if (action === 'busy') {
            this.api.agentNotReadyM(agentInfo.agentDN, NotReadyReason.BUSY);
        } else if (action === 'rest') {
            this.api.agentNotReadyM(agentInfo.agentDN, NotReadyReason.RESTING);
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
            if (agentInfo.agentDN === this._agent.thisDN) {
                utils.showMessage('不能监听自己！');
                return false;
            } else {
                this.api.monitorCall(agentInfo.callID, agentInfo.agentDN);
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
            if (agentInfo.agentDN === this._agent.thisDN) {
                utils.showMessage('不能强插自己！');
                return false;
            } else {
                this.api.doInterruptCall(agentInfo.callID, agentInfo.agentDN, agentInfo.otherDN);
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
            if (agentInfo.agentDN === this._agent.thisDN) {
                utils.showMessage('不能拦截自己！');
                return false;
            } else {
                this.api.substitute(agentInfo.callID, agentInfo.agentDN, agentInfo.otherDN);
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
            if (agentInfo.agentDN === this._agent.thisDN) {
                utils.showMessage('不要在此处挂断自己！');
                return false;
            } else {
                this.api.releaseAgentCall(agentInfo.callID, agentInfo.agentDN);
            }
        } else {
            utils.showMessage('当前坐席未在通话!');
            return false;
        }
    };
}

export default AgentMonitor;
