import ContentBox from './ContentBox';
import AgentInfo from '../model/AgentInfo';

let autoIncrementId = 0;

/**
 * 坐席状态栏
 */
class AgentStateBar extends ContentBox {

    constructor({
                    boxClassName,
                    contentClassName = 'state_bar',
                    visible = true,
                } = {}) {

        super({
            className: boxClassName,
            visible: visible,
        });

        this.id = `AgentStateBar-${autoIncrementId++}`;
        this._contentClassName = contentClassName;

        this.stateList = [
            {state: 'total', total: 0, name: '坐席总数', element: null},
            {state: 'ready', total: 0, name: '就绪', element: null},
            {state: 'not_ready', total: 0, name: '未就绪', element: null},
            {state: 'talking', total: 0, name: '通话中', element: null},
            {state: 'dialing', total: 0, name: '呼叫中', element: null},
            {state: 'ringing', total: 0, name: '振铃中', element: null},
            {state: 'hold', total: 0, name: '保持中', element: null},
            {state: 'offline', total: 0, name: '离线', element: null},
        ];
    }

    generateContentNode() {
        let contentNode = document.createElement('div');
        contentNode.className = this._contentClassName;

        let tableNode = document.createElement('table');
        let tableBodyNode = document.createElement('tbody');
        let trNode = document.createElement('tr');
        this.stateList.forEach((item) => {
            item.element = this._generateSingleStateNode(item);
            trNode.appendChild(item.element);
        });

        tableBodyNode.appendChild(trNode);
        tableNode.appendChild(tableBodyNode);
        contentNode.appendChild(tableNode);
        return contentNode;
    }

    /**
     * 生成单个状态节点
     * @private
     */
    _generateSingleStateNode({
                                 state,
                                 total = 0,
                                 name
                             }) {
        let stateBtn = document.createElement('td');
        let totalNode = document.createElement('span');
        totalNode.className = `cc-btn ${state}`;
        totalNode.innerText = total;
        let nameNode = document.createTextNode(name);

        stateBtn.appendChild(totalNode);
        stateBtn.appendChild(nameNode);

        return stateBtn;
    }

    /**
     * 根据状态更新集合中的项
     * @param state
     * @param total
     */
    updateStateTotal(state, total) {
        this.stateList.forEach((item) => {
            if (item.state === state) {
                item.total = total;
                item.element.querySelector(`.${state}`).innerText = total;
            }
        });
    }
}

export default AgentStateBar;
