import ContentBox from './ContentBox';
import AgentSingleGraph from './AgentSingleGraph';

let autoIncrementId = 0;

/**
 * 坐席监控图标格式展示
 */
class AgentGraph extends ContentBox {

    constructor({
                    boxClassName,
                    contentClassName = 'monitor-graph',
                    visible = true,

                    agents = [],
                    onStateMenuClick = function() {},
                    onOperateMenuClick = function() {},
                    onCreated = function() {},
                    onUpdatingAgentInfo = function() {return true},
                    isStartAlarm = function() {return false},
                    addAlarmAgent = function() {},
                } = {}) {

        super({
            className: boxClassName,
            visible: visible,
        });

        this.id = `AgentGraph-${autoIncrementId++}`;
        this._contentClassName = contentClassName;

        this._graphList = agents.map((v, i) => {
            return new AgentSingleGraph({
                agentInfo: v,
                onStateMenuClick,
                onOperateMenuClick,
                onUpdatingAgentInfo,
                onCreated,
                isStartAlarm,
                addAlarmAgent,
            });
        });
    }

    generateContentNode() {
        let contentNode = document.createElement('div');
        contentNode.className = this._contentClassName;

        let graphListNode = document.createElement('ul');
        this._graphList.forEach((graph) => {
            graphListNode.appendChild(graph.create().rootNode);
        });

        contentNode.appendChild(graphListNode);
        return contentNode;
    }

    destroy() {
        super.destroy();
        this._graphList.forEach(g => g.destroy());
    }

    get graphList() {
        return this._graphList;
    }
}

export default AgentGraph;
