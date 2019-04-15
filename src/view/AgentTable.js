import ContentBox from './ContentBox';
import AgentTableRow from './AgentTableRow';

let autoIncrementId = 0;

/**
 * 坐席监控表格格式展示
 */
class AgentTable extends ContentBox {

    constructor({
                    boxClassName,
                    contentClassName = 'table monitor-table',
                    visible = true,

                    agents = [],
                    onStateMenuClick = function() {},
                    onOperateMenuClick = function() {},
                    onCreated = function() {},
                    onUpdatingAgentInfo = function() {return true},
                } = {}) {

        super({
            className: boxClassName,
            visible: visible,
        });

        this.id = `AgentTable-${autoIncrementId++}`;
        this._contentClassName = contentClassName;

        this.tableHeadData = ['坐席名称', '分机', '坐席状态', '当前状态开始时间', '客户电话', '通话类型', '操作', '状态'];

        this._rows = agents.map((v, i) => {
            return new AgentTableRow({
                agentInfo: v,
                onStateMenuClick,
                onOperateMenuClick,
                onUpdatingAgentInfo,
                onCreated,
            });
        });
    }


    generateContentNode() {
        let contentNode = document.createElement('div');
        contentNode.className = this._contentClassName;

        let tableNode = document.createElement('table');
        tableNode.className = 'text-center';
        let tableHead = document.createElement('thead');
        this.tableHeadData.forEach((v) => {
            let th = document.createElement('th');
            th.innerText = v;
            tableHead.appendChild(th);
        });
        tableNode.appendChild(tableHead);
        this._rows.forEach((row) => {
            tableNode.appendChild(row.create().rootNode);
        });

        contentNode.appendChild(tableNode);
        return contentNode;
    }

    destroy() {
        super.destroy();
        this._rows.forEach(g => g.destroy());
    }

    get rows() {
        return this._rows;
    }

}

export default AgentTable;
