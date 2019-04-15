import AgentInfo from '../model/AgentInfo';
import {AgentState, CallType, NotReadyReason} from '../constants';
import utils from '../utils/utils';

let autoIncrementId = 0;

/**
 * 单个坐席表格种一行数据展示
 */
class AgentTableRow{

    constructor({
                    agentInfo,
                    visible = true,

                    onStateMenuClick = function() {},
                    onOperateMenuClick = function() {},
                    onCreated = function() {},
                    onUpdatingAgentInfo = function() {return true},
                }) {
        this.id = `AgentTableRow-${autoIncrementId++}`;
        this.agentInfo = agentInfo;
        /*
         * 所有可操作动作
         * */
        this.actionList = [
            {'name': '就绪', 'value': 'ready'},
            {'name': '示忙', 'value': 'busy'},
            {'name': '休息', 'value': 'rest'},
        ];

        this.onStateMenuClick = onStateMenuClick;
        this.onOperateMenuClick = onOperateMenuClick;
        this.onCreated = onCreated;
        this.onUpdatingAgentInfo = onUpdatingAgentInfo;

        this.agentInfo.on('change', this._updateAgentInfoHandler = this.updateAgentInfo.bind(this));
    }


    create() {
        if (!this.rootNode) {
            let rowNode = this.rootNode = document.createElement('tr');
            rowNode.id = this.id;
            rowNode.className = `${this.agentInfo.state}-row`;

            // 姓名
            let agentNameNode = document.createElement('td');
            agentNameNode.innerText = this.agentInfo.agentName;
            // 分机
            let agentDNNode = document.createElement('td');
            agentDNNode.innerText = this.agentInfo.shortNum;
            // 状态
            let agentStateNode = document.createElement('td');
            agentStateNode.className = 'agentstate';
            agentStateNode.innerText = this.agentInfo.getCurrentStateName();
            // 当前状态开始事件
            let startTimeNode = document.createElement('td');
            startTimeNode.innerText = this.agentInfo.creationTime ? utils.formatDate(new Date(this.agentInfo.creationTime)) : '';
            // 客户电话
            let otherDNNode = document.createElement('td');
            otherDNNode.innerText = this.agentInfo.otherDN;
            // 呼叫类型
            let callTypeNode = document.createElement('td');
            callTypeNode.innerText = this.agentInfo.getCallTypeName();
            // 操作
            let operateNode = this._operateNode = document.createElement('td');
            let operateButtons = this._generateOperateButtons([
                {onClick: () => {this.onOperateMenuClick('monitor', this.agentInfo)}, name: '监听', className: 'cc-btn btn-outline btn-primary btn-sm'},
                {onClick: () => {this.onOperateMenuClick('substitute', this.agentInfo)}, name: '拦截', className: 'cc-btn btn-outline btn-info btn-sm'},
                {onClick: () => {this.onOperateMenuClick('interrupt', this.agentInfo)}, name: '强插', className: 'cc-btn btn-outline btn-warning btn-sm'},
                {onClick: () => {this.onOperateMenuClick('hangup', this.agentInfo)}, name: '挂断', className: 'cc-btn btn-outline btn-danger btn-sm'},
            ]);
            operateNode.appendChild(operateButtons);
            // 状态切换
            let stateSwitching = document.createElement('td');
            stateSwitching.className = 'state-switching';
            let switchingButton = this._stateSwitchingButton = document.createElement('button');
            switchingButton.type = 'button';
            switchingButton.className = 'cc-btn btn-outline btn-default btn-sm';
            switchingButton.innerText = '切换';
            // 默认置灰不可用
            switchingButton.disabled = true;
            switchingButton.onclick = (e) => {this._toggleDropdownMenu(e)};
            document.addEventListener('click', this.onBodyClick = this._hideDropdownMenu.bind(this));
            stateSwitching.appendChild(switchingButton);
            stateSwitching.appendChild(this._generateDropdownMenuNode());

            rowNode.appendChild(agentNameNode);
            rowNode.appendChild(agentDNNode);
            rowNode.appendChild(agentStateNode);
            rowNode.appendChild(startTimeNode);
            rowNode.appendChild(otherDNNode);
            rowNode.appendChild(callTypeNode);
            rowNode.appendChild(operateNode);
            rowNode.appendChild(stateSwitching);
            this._resetMonitorButtonState();
        }
        this.onCreated(this);
        return this;
    }

    _generateOperateButtons(menus) {
        let btnsEl = document.createDocumentFragment();
        menus.forEach((option) => {
            let button = document.createElement('button');
            button.className = option.className;
            button.onclick = option.onClick;
            button.innerText = option.name;
            // 默认隐藏
            button.style.display = 'none';
            btnsEl.appendChild(button);
        });
        return btnsEl;
    }

    _generateDropdownMenuNode() {
        let menuList = this._dropdownMenuNode = document.createElement('ul');
        menuList.className = 'dropdown-menu';
        menuList.style.display = 'none';

        this._actionElementMap = {};
        this.actionList.forEach((action) => {
            let menu = document.createElement('li');
            menu.onclick = () => {this.onStateMenuClick(action.value, this.agentInfo)};

            let textSpan = document.createElement('span');
            textSpan.innerText = action.name;

            menu.appendChild(textSpan);
            menuList.appendChild(menu);
            this._actionElementMap[action.value] = menu;
        });

        return menuList;
    }

    _hideDropdownMenu() {
        let _menuVisible = this._dropdownMenuNode.style.display !== 'none';
        if (_menuVisible) {
            this._dropdownMenuNode.style.display = 'none';
        }
    }
    _toggleDropdownMenu(e) {
        let _menuVisible = this._dropdownMenuNode.style.display !== 'none';
        if (_menuVisible) {
            this._hideDropdownMenu();
        } else {
            this._dropdownMenuNode.style.display = 'block';
        }
        e.stopPropagation();
    }

    /**
     * @param agentInfo
     */
    updateAgentInfo(agentInfo) {
        if (!this.onUpdatingAgentInfo(agentInfo, this)) {
            return;
        }
        this.refresh();
    }

    refresh() {
        if (this.rootNode && this.rootNode.parentNode) {
            let parentNode = this.rootNode.parentNode;
            let oldChild = this.rootNode;
            this.rootNode = null;
            this.create();
            parentNode.replaceChild(this.rootNode, oldChild);
        }
    }

    /**
     * 重新设置按钮是否可用状态
     * @private
     */
    _resetMonitorButtonState() {
        let childNodes = this._operateNode.childNodes;
        if (this.agentInfo.state === AgentInfo.OFFLINE) {
            this._stateSwitchingButton.disabled = true;
            for (let i=0;i< childNodes.length; i++) {
                childNodes[i].style.display = 'none';
            }
        } else if (this.agentInfo.rawState === AgentState.NOTREADY && this.agentInfo.reasonCode === NotReadyReason.TALKING) {
            this._stateSwitchingButton.disabled = true;
            for (let i=0;i< childNodes.length; i++) {
                childNodes[i].style.display = '';
            }
        } else {
            this._stateSwitchingButton.disabled = false;
            for (let i=0;i< childNodes.length; i++) {
                childNodes[i].style.display = 'none';
            }
        }
    }

    isHidden() {
        return (this.rootNode.style.display === 'none' || this.agentInfo.state === AgentInfo.OFFLINE)
    }

    destroy() {
        if (this.rootNode && this.rootNode.parentNode) {
            this.rootNode.parentNode.removeChild(this.rootNode);
        }
        this.agentInfo.off('change', this._updateAgentInfoHandler);
    }

    show() {
        this.rootNode.style.display = 'table-row';
        return this;
    }

    hide() {
        this.rootNode.style.display = 'none';
        return this;
    }

}

export default AgentTableRow;
