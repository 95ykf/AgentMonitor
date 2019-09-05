import ContentBox from './ContentBox';
import AgentTableRow from './AgentTableRow';

let autoIncrementId = 0;

/**
 * 坐席监控表格格式展示
 */
class AgentTable extends ContentBox {

    constructor({
                    boxClassName,
                    contentClassName = 'monitor-table',
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

        this.tableHeadData = ['坐席名称', '分机', '坐席状态', '状态保持时长', '客户电话', '通话类型', '操作', '状态'];

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
        tableNode.className = 'table table-hover text-center';

        let tableHead = document.createElement('thead');
        let tableHeadRow = document.createElement('tr');
        this.tableHeadData.forEach((v) => {
            let th = document.createElement('th');
            th.innerText = v;
            tableHeadRow.appendChild(th);
        });
        tableHead.appendChild(tableHeadRow);
        tableNode.appendChild(tableHead);

        let tableBody = document.createElement('tbody');
        this._rows.forEach((row) => {
            tableBody.appendChild(row.create().rootNode);
        });
        tableNode.appendChild(tableBody);

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
