import AgentInfo from '../model/AgentInfo';
import {AgentState, NotReadyReason} from '../constants';

let autoIncrementId = 0;

/**
 * 单个坐席图表
 */
class AgentSingleGraph{

    constructor({
                    agentInfo,
                    onStateMenuClick = function() {},
                    onOperateMenuClick = function() {},
                    onCreated = function() {},
                    onUpdatingAgentInfo = function() {return true},
                    isStartAlarm = function() {return false},
                    addAlarmAgent = function() {},
                }) {
        this.id = `AgentSingleGraph-${autoIncrementId++}`;
        this.agentInfo = agentInfo;

        this.onStateMenuClick = onStateMenuClick;
        this.onOperateMenuClick = onOperateMenuClick;
        this.onCreated = onCreated;
        this.onUpdatingAgentInfo = onUpdatingAgentInfo;
        this.isStartAlarm = isStartAlarm;
        this.addAlarmAgent = addAlarmAgent;

        this.onBodyClick = this._hideMenu.bind(this);

        this.agentInfo.on('change', this._updateAgentInfoHandler = this.updateAgentInfo.bind(this));
        this.agentInfo.stateTimer.on('change', this._agentStateTimerHandler = this.updateAgentStateTimer.bind(this));
    }


    create() {
        if (!this.rootNode) {
            let rootNode = this.rootNode = document.createElement('li');
            rootNode.id = this.id;
            rootNode.className = `${this.agentInfo.state}`;

            // 工号
            let agentDNNode = document.createElement('p');
            agentDNNode.className = 'job-number';
            agentDNNode.innerText = `${this.agentInfo.shortNum}`;
            // 姓名
            let agentNameNode = document.createElement('p');
            agentNameNode.className = 'agent-name';
            agentNameNode.innerText = `${this.agentInfo.agentName}`;
            // 状态保持时长
            let stateTimerNode = this._stateTimerNode = document.createElement('p');
            stateTimerNode.className = 'agent-state-timer';
            stateTimerNode.innerHTML = this.agentInfo.creationTime ? this.agentInfo.stateTimer.format() : '&nbsp;';

            let stateMenu = this._stateMenu = this._generateMoreMenu([
                {onClick: () => {this.onStateMenuClick('ready', this.agentInfo)}, name: '就绪'},
                {onClick: () => {this.onStateMenuClick('busy', this.agentInfo)}, name: '示忙'},
                {onClick: () => {this.onStateMenuClick('rest', this.agentInfo)}, name: '休息'},
            ]);
            let operateMenu = this._operateMenu =this._generateMoreMenu([
                {onClick: () => {this.onOperateMenuClick('monitor', this.agentInfo)}, name: '监听'},
                {onClick: () => {this.onOperateMenuClick('substitute', this.agentInfo)}, name: '拦截'},
                {onClick: () => {this.onOperateMenuClick('interrupt', this.agentInfo)}, name: '强插'},
                {onClick: () => {this.onOperateMenuClick('hangup', this.agentInfo)}, name: '挂断'},
            ]);

            rootNode.appendChild(agentDNNode);
            rootNode.appendChild(stateTimerNode);
            rootNode.appendChild(agentNameNode);
            rootNode.appendChild(this._generateMonitorButtons(this.agentInfo.getCurrentStateName()));
            rootNode.appendChild(stateMenu);
            rootNode.appendChild(operateMenu);
        }
        this.onCreated(this);
        return this;
    }

    _generateMonitorButtons(stateName) {
        let rootNode = document.createElement('p');
        rootNode.className = 'monitor_btns';
        let stateButton = this._stateButton = document.createElement('span');
        stateButton.className = 'cc-btn btn-xs pull-left disabled';
        stateButton.innerText = stateName;
        stateButton.onclick = (e) => {this._toggleMenu(e, this._stateMenu)};

        let operateButton = this._operateButton = document.createElement('span');
        operateButton.className = 'cc-btn btn-outline btn-xs pull-right disabled';
        operateButton.innerText = '更多';
        operateButton.onclick = (e) => {this._toggleMenu(e, this._operateMenu)};

        this._resetMonitorButtonState();
        rootNode.appendChild(stateButton);
        rootNode.appendChild(operateButton);
        return rootNode;
    }

    _generateMoreMenu(menus) {
        let menuEl = document.createElement('p');
        menuEl.className = 'more_list';
        menuEl.style.display = 'none';

        menus.forEach((menuOption) => {
            let menu = document.createElement('span');
            menu.onclick = menuOption.onClick;
            menu.innerText = menuOption.name;
            menuEl.appendChild(menu);
        });

        return menuEl;
    }

    _hideMenu() {
        let _visible = this._stateMenu.style.display !== 'none';
        if (_visible) {
            this._stateMenu.style.display = 'none';
            document.removeEventListener('click', this.onBodyClick);
        }
        _visible = this._operateMenu.style.display !== 'none';
        if (_visible) {
            this._operateMenu.style.display = 'none';
            document.removeEventListener('click', this.onBodyClick);
        }
    }
    _toggleMenu(e, menu) {
        let _visible = menu.style.display !== 'none';
        if (_visible) {
            this._hideMenu();
        } else if (menu.disabled === false){
            menu.style.display = 'block';
            document.addEventListener('click', this.onBodyClick);
        }
        e.stopPropagation();
    }

    /**
     * 更新坐席信息，更新前触发onUpdatingAgentInfo事件，事件中返回false将终止update
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
     * 开始告警
     */
    startAlarm() {
        if (!this.rootNode.classList.contains('agent-status-alarm')) {
            this.rootNode.classList.add('agent-status-alarm');
        }
    }

    /**
     * 停止告警
     */
    stopAlarm() {
        if (this.rootNode.classList.contains('agent-status-alarm')) {
            this.rootNode.classList.remove('agent-status-alarm');
        }
    }

    /**
     * 更新坐席状态定时和告警，更新前触发onUpdatingAgentInfo事件，事件中返回false将终止update
     * @param seconds  秒数
     * @param timerValue  时间字符串
     */
    updateAgentStateTimer(seconds, timerValue) {
        if (!this.onUpdatingAgentInfo(this.agentInfo, this)) {
            return;
        }

        this._stateTimerNode.innerText = timerValue;

        // 是否触发告警
        if (this.isStartAlarm(this.agentInfo, this)) {
            this.startAlarm();
        } else {
            this.stopAlarm();
        };

        // 添加告警的坐席
        this.addAlarmAgent()
    }

    /**
     * 重新设置按钮是否可用状态
     * @private
     */
    _resetMonitorButtonState() {
        if (this.agentInfo.state === AgentInfo.OFFLINE) {
            this._stateMenu['disabled'] = true;
            this._operateMenu['disabled'] = true;
        } else if (this.agentInfo.rawState === AgentState.NOTREADY && this.agentInfo.reasonCode === NotReadyReason.TALKING) {
            this._stateMenu['disabled'] = true;
            this._operateMenu['disabled'] = false;
        } else {
            this._stateMenu['disabled'] = false;
            this._operateMenu['disabled'] = true;
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
        this.rootNode.style.display = 'block';
        return this;
    }

    hide() {
        this.rootNode.style.display = 'none';
        return this;
    }
}

export default AgentSingleGraph;
