import EventEmitter from 'eventemitter3';
import {AgentState, NotReadyReason, CallType, PartyState} from "../constants";
import Timer from "./Timer";

/**
 * 坐席
 */
class AgentInfo extends EventEmitter {

    constructor({
                    agentDN = '',
                    agentName = '',
                    agentDept = '',
                    agentGroup = '',
                    agentState = AgentState.OFFLINE,
                    reasonCode = NotReadyReason.UNKNOWN,
                    callID = '',
                    callType = CallType.UNKNOWN,
                    otherDN = '',
                    partState = -1,
                    creationTime,
                }) {

        super();

        this.state = AgentInfo.OFFLINE;
        this.agentDN = agentDN;
        this.shortNum = agentDN ? agentDN.substr(-4) : '未识别';
        this.agentName = agentName ? agentName : this.shortNum;
        this.agentDept = agentDept;
        this.agentGroup = agentGroup;
        this.rawState = agentState;
        this.reasonCode = reasonCode;
        this.callID = callID;
        this.callType = callType;
        this.otherDN = otherDN;
        this.partState = partState;
        this.creationTime = creationTime;
        if (creationTime) {
            let initSeconds = Math.floor((new Date() - new Date(creationTime)) / 1000);
            this.stateTimer = new Timer(initSeconds).start();
        } else {
            this.stateTimer = new Timer();
        }
    }

    update({
               agentState = AgentState.OFFLINE,
               reasonCode = NotReadyReason.UNKNOWN,
               callID = '',
               callType = CallType.UNKNOWN,
               otherDN = '',
               partState = -1,
               creationTime,
           } = {}) {

        if (creationTime) {
            let initSeconds = Math.floor((new Date() - new Date(creationTime)) / 1000);
            this.stateTimer.restart(initSeconds);
        } else {
            this.stateTimer.stop();
        }

        this.state = AgentInfo.convertToLocalState(agentState, reasonCode, partState);
        this.rawState = agentState;
        this.reasonCode = reasonCode;
        this.callID = callID;
        this.callType = callType;
        this.otherDN = otherDN;
        this.partState = partState;
        this.creationTime = creationTime;

        this.emit('change', this);
    }


    /**
     * 获取呼叫类型的翻译
     * @returns {string}
     */
    getCallTypeName() {
        return this.callType === CallType.UNKNOWN ? '' : CallType.dict[this.callType];
    }

    /**
     * 获得当前状态名称
     * @returns {*}
     */
    getCurrentStateName() {
        let state = this.state;
        if (this.state === AgentInfo.NOT_READY) {
            state = AgentInfo.convertNotReadyReason(this.reasonCode);
        }
        return (AgentInfo.stateDict[state] ?  AgentInfo.stateDict[state].name : '');
    }

    /**
     * 将服务器状态值转化为本系统可读的值
     *
     * @param rawState
     * @param reason  0 整理；1 通话；2 话机不可用；3 示忙；4 离开；5 休息；
     * @param partState 通话状态
     * @returns {string}
     */
    static convertToLocalState(rawState, reason, partState) {
        let state = AgentInfo.OFFLINE;
        if (rawState === AgentState.NOTREADY) {
            if (reason === NotReadyReason.TALKING) {
                state = AgentInfo.convertPartState(partState);
            } else {
                state = AgentInfo.NOT_READY;
            }
        } else if (rawState === AgentState.READY) {
            state = AgentInfo.READY;
        } else if (rawState === AgentState.OFFLINE) {
            state = AgentInfo.OFFLINE;
        }
        return state;
    }

    /**
     * 通话状态转换
     * @param partState 2 呼叫 3 振铃 4 通话 5 保持
     * @returns {string}
     */
    static convertPartState(partState) {
        let state = AgentInfo.TALKING;
        // 呼叫
        if (partState === PartyState.DIALING) {
            state = AgentInfo.DIALING;
        }
        // 振铃
        else if (partState === PartyState.RINGING) {
            state = AgentInfo.RINGING;
        }
        // 通话
        else if (partState === PartyState.TALK) {
            state = AgentInfo.TALKING;
        }
        // 保持
        else if (partState === PartyState.HELD) {
            state = AgentInfo.HOLD;
        }
        return state;
    }

    /**
     * 获取未就绪状态内部key，如果不存在默认返回示忙
     * @param reason
     * @returns {*}
     */
    static convertNotReadyReason(reason) {
        let notReadyState = AgentInfo.reasonCodeMapping[reason];
        if (!notReadyState) {
            notReadyState = AgentInfo.reasonCodeMapping[NotReadyReason.BUSY];
        }
        return notReadyState;
    }

    /**
     * 设置自定义未就绪状态码
     * @param notReadyReason
     */
    static setCustomNotReadyReason(notReadyReason) {
        for (let reason of notReadyReason) {
            let _notReadyStateKey = AgentInfo.reasonCodeMapping[reason.code];
            // 扩展的未就绪状态
            if (!_notReadyStateKey) {
                _notReadyStateKey = `not-ready-${reason.code}`;
                AgentInfo.reasonCodeMapping[reason.code] = _notReadyStateKey;
            }
            AgentInfo.stateDict[_notReadyStateKey] = {name: reason.name, rawState: AgentState.NOTREADY, reasonCode: reason.code};
        }
    }
}

// 坐席本地状态常量
AgentInfo.READY = 'ready';
AgentInfo.NOT_READY = 'not_ready';
AgentInfo.TALKING = 'talking';
AgentInfo.RINGING = 'ringing';
AgentInfo.DIALING = 'dialing';
AgentInfo.HOLD = 'hold';
AgentInfo.OFFLINE = 'offline';
// 未就绪状态
AgentInfo.NOT_READY_BUSY = 'busy';
AgentInfo.NOT_READY_RESTING = 'resting';
AgentInfo.NOT_READY_NEATENING = 'neatening';
/* 状态字典，未就绪有多个动态自字段，翻译由用户自由扩展 */
AgentInfo.stateDict = {
    [AgentInfo.OFFLINE]: {name: '离线', rawState: AgentState.OFFLINE, reasonCode: NotReadyReason.UNKNOWN},
    [AgentInfo.READY]: {name: '就绪', rawState: AgentState.READY, reasonCode: NotReadyReason.UNKNOWN},
    [AgentInfo.NOT_READY_BUSY]: {name: '示忙', rawState: AgentState.NOTREADY, reasonCode: NotReadyReason.BUSY},
    [AgentInfo.NOT_READY_RESTING]: {name: '休息', rawState: AgentState.NOTREADY, reasonCode: NotReadyReason.RESTING},
    [AgentInfo.NOT_READY_NEATENING]: {name: '整理', rawState: AgentState.NOTREADY, reasonCode: NotReadyReason.NEATENING},
    [AgentInfo.TALKING]: {name: '通话', rawState: AgentState.NOTREADY, reasonCode: NotReadyReason.TALKING, partState: PartyState.TALK},
    [AgentInfo.RINGING]: {name: '振铃', rawState: AgentState.NOTREADY, reasonCode: NotReadyReason.TALKING, partState: PartyState.RINGING},
    [AgentInfo.DIALING]: {name: '呼叫', rawState: AgentState.NOTREADY, reasonCode: NotReadyReason.TALKING, partState: PartyState.DIALING},
    [AgentInfo.HOLD]: {name: '保持', rawState: AgentState.NOTREADY, reasonCode: NotReadyReason.TALKING, partState: PartyState.HELD},
};
AgentInfo.reasonCodeMapping = {
    [NotReadyReason.BUSY]: AgentInfo.NOT_READY_BUSY,
    [NotReadyReason.RESTING]: AgentInfo.NOT_READY_RESTING,
    [NotReadyReason.NEATENING]: AgentInfo.NOT_READY_NEATENING,
};

export default AgentInfo;
