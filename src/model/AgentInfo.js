import EventEmitter from 'eventemitter3';
import {AgentState, NotReadyReason, CallType} from "../constants";
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
        return AgentInfo.stateDict[this.state] || '';
    }

    /**
     * 将服务器状态值转化为本系统可读的值
     *
     * @param rawState
     * @param reason  0 整理；1 通话；2 话机不可用；3 示忙；4 离开；5 休息；
     * @returns {string}
     */
    static convertToLocalState(rawState, reason, partState) {
        let state = AgentInfo.OFFLINE;
        if (rawState === AgentState.NOTREADY) {
            switch (reason) {
                case NotReadyReason.NEATENING:
                    state = AgentInfo.NEATENING;
                    break;
                case NotReadyReason.TALKING:
                    state = AgentInfo.convertPartState(partState);
                    break;
                case NotReadyReason.BUSY:
                    state = AgentInfo.BUSY;
                    break;
                case NotReadyReason.RESTING:
                    state = AgentInfo.RESTING;
                    break;
                default:
                    state = AgentInfo.BUSY;
                    break;
            }
        } else if (rawState === AgentState.READY) {
            state = AgentInfo.READY;
        } else if (rawState === AgentState.OFFLINE) {
            state = AgentInfo.OFFLINE;
        }
        return state;
    }

    static convertPartState(partState) {
        let state = AgentInfo.TALKING;

        switch (partState) {
            case 2:
                state = AgentInfo.DIALING;
                break;
            case 3:
                state = AgentInfo.RINGING;
                break;
            case 4:
                state = AgentInfo.TALKING;
                break;
            case 5:
                state = AgentInfo.HOLD;
                break;
        }

        return state;
    }
}

// 坐席本地状态常量
AgentInfo.READY = 'ready';
AgentInfo.BUSY = 'busy';
AgentInfo.RESTING = 'resting';
AgentInfo.NEATENING = 'neatening';
AgentInfo.TALKING = 'talking';
AgentInfo.RINGING = 'ringing';
AgentInfo.DIALING = 'dialing';
AgentInfo.HOLD = 'hold';
AgentInfo.OFFLINE = 'offline';
/* 状态字典 */
AgentInfo.stateDict = {
    [AgentInfo.READY]: '就绪',
    [AgentInfo.BUSY]: '示忙',
    [AgentInfo.RESTING]: '休息',
    [AgentInfo.NEATENING]: '整理',
    [AgentInfo.TALKING]: '通话',
    [AgentInfo.RINGING]: '振铃',
    [AgentInfo.DIALING]: '呼叫',
    [AgentInfo.HOLD]: '保持',
    [AgentInfo.OFFLINE]: '离线',
};

export default AgentInfo;
