import EventEmitter from 'eventemitter3';
import AgentInfo from "./AgentInfo";
import MonitorGroup from "./MonitorGroup";

class AgentMonitorInfo extends EventEmitter {

    constructor() {
        super();
        // 所有唯一坐席Map，key坐席agentId
        this.agents = new Map();
        // 所有唯一监控组Map，key监控组唯一标识monitorId
        this.monitorGroupMap = new Map();
        /* 所有用于分类的坐席状态分类Map */
        this.stateMap = new Map();
    }

    /**
     * 获取状态的坐席数
     * @param state
     */
    getStateCount(state) {
        return this.stateMap.get(state) ? this.stateMap.get(state).length : 0
    }

    /**
     * 根据状态数组获取状态的坐席总数
     * @param {Array} states 状态数组
     * @returns {number}
     */
    countByStates(states) {
        let count = 0;
        states.forEach((state) => {
            count += (this.stateMap.get(state) ? this.stateMap.get(state).length : 0);
        });
        return count;
    }

    /**
     * 接收服务端的坐席更新消息
     * @param msg
     */
    updateAgent(msg) {
        let agentInfo = this.agents.get(msg.agentDN);
        if (agentInfo) {
            let beforeState = agentInfo.state;
            agentInfo.update(msg);
            let afterState = agentInfo.state;

            // 状态发生变更
            if (beforeState !== afterState) {
                let stateGroupMembers = this.stateMap.get(beforeState);
                stateGroupMembers.splice(stateGroupMembers.indexOf(agentInfo), 1);
                stateGroupMembers = this.stateMap.get(afterState) || [];
                stateGroupMembers.push(agentInfo);
                this.stateMap.set(agentInfo.state, stateGroupMembers);
                this.emit('statisticChange', beforeState, afterState);
            }
        }
    }

    /**
     * 处理服务器响应监控组列表数据
     * @param monitorGroupList 服务器查询坐席监控组返回监控组列表
     */
    processPacket(monitorGroupList) {
        monitorGroupList.forEach((monitorGroup) => {
            let monitorGroupObj = this.monitorGroupMap.get(monitorGroup.monitorId) || new MonitorGroup();
            monitorGroupObj.id = monitorGroup.monitorId;
            monitorGroupObj.name = monitorGroup.monitorName;
            monitorGroup.groupMemberList.forEach(({agentId, nameCn}) => {
                let agentInfo = this.agents.get(agentId);
                // 判断唯一索引中是否存在保证对象指向唯一
                if (!agentInfo) {
                    agentInfo = new AgentInfo({agentDN: agentId, agentName: nameCn});
                    this.agents.set(agentId, agentInfo);

                    let stateGroupMembers = this.stateMap.get(agentInfo.state) || [];
                    stateGroupMembers.push(agentInfo);
                    this.stateMap.set(agentInfo.state, stateGroupMembers);
                }
                monitorGroupObj.agents.push(agentInfo);
            });
            this.monitorGroupMap.set(monitorGroup.monitorId, monitorGroupObj);
        });
    }
}

export default AgentMonitorInfo;
