import AgentMonitorInfo from '../model/AgentMonitorInfo';
import AgentStateBar from './AgentStateBar';
import AgentGraph from './AgentGraph';
import AgentTable from './AgentTable';
import TabControl from './TabControl';
import {QuerySelector} from "./QuerySelector";

let autoIncrementId = 0;
const emptyFunction = function () {};

export class AgentMonitorComponent {

    /**
     *
     * @param agentMonitorInfo {AgentMonitorInfo}
     * @param onStateMenuClick
     * @param onOperateMenuClick
     */
    constructor({
                    agentMonitorInfo,
                    onStateMenuClick = emptyFunction,
                    onOperateMenuClick = emptyFunction,
                }) {
        this.id = `AgentMonitor-${autoIncrementId++}`;
        this._rootNodeClassName = 'agent-monitor';

        this._agentMonitorInfo = agentMonitorInfo;
        this._agents = agentMonitorInfo.agents;
        this._monitorGroupMap = agentMonitorInfo.monitorGroupMap;

        this._graphBoxs = new Map();
        this._tableBoxs = new Map();
        this.tabControls = new Map();

        this.onStateMenuClick = onStateMenuClick;
        this.onOperateMenuClick = onOperateMenuClick;

    }

    create() {
        if (!this.rootNode) {
            let rootNode = this.rootNode = document.createElement('div');
            rootNode.id = this.id;
            rootNode.className = this._rootNodeClassName;

            let queryNode = document.createElement('div');
            queryNode.className = 'cc-box-content query-selector';
            queryNode.appendChild(this._generateGroupSelector());
            queryNode.appendChild(this._generateStateSelector());
            queryNode.appendChild(this._generateTypeSelector());
            rootNode.appendChild(queryNode);

            rootNode.appendChild(this._generateAgentStateBar());

            for (let tabControl of this.tabControls.values()) {
                rootNode.appendChild(tabControl.tabsContainer);
            }

            this.hide();
        }
        return this;
    }

    /**
     * 生成监控组选择器
     * @private
     */
    _generateGroupSelector() {
        let monitorGroups =  [...this._monitorGroupMap.values()];
        let optionData = [];
        optionData.push({name: '全部', value: 'all', selected: true});
        monitorGroups.forEach(group => {
            optionData.push({name: group.name, value: group.id, selected: true});
        });

        let groupSelectorNode = new QuerySelector({
            title: '监控组：',
            visible: true,
            data: optionData,
        });
        groupSelectorNode.onSelected = (item) => {
            let selectedLength = groupSelectorNode.selectedOptions().length;
            // 当item是all时不增加监控组标签
            'all' === item.value || this.addMonitorGroup(item.value);
            // 点击全选或者除全选外全部被选中时
            if ('all' === item.value || selectedLength === (optionData.length - 1)) {
                groupSelectorNode.selectAll();
            }
        };
        groupSelectorNode.onDeselecting = (item) => {
            let selectedLength = groupSelectorNode.selectedOptions().length;
            // 不允许全部取消，或最后一个选项不允许取消
            return ('all' !== item.value && selectedLength > 1);
        };
        groupSelectorNode.onDeselected = (item) => {
            let selectedLength = groupSelectorNode.selectedOptions().length;
            // 当item是all时不删除监控组标签
            'all' === item.value || this.removeMonitorGroup(item.value);
            // 当全选状态时取消一个非全选选项
            if ((selectedLength === optionData.length -1) && 'all' !== item.value) {
                groupSelectorNode.deselect(0, true);
            }
        };
        return groupSelectorNode.create().rootNode;
    }

    /**
     * 生成坐席状态选择器
     * @private
     */
    _generateStateSelector() {
        let optionData = [
            {name: '全部', value: 'all', selected: false},
            {name: '就绪', value: 'ready', selected: true},
            {name: '未就绪', value: 'not_ready', selected: true},
            {name: '通话中', value: 'talking', selected: true},
            {name: '呼叫中', value: 'dialing', selected: true},
            {name: '振铃中', value: 'ringing', selected: true},
            {name: '保持中', value: 'hold', selected: true},
            {name: '离线', value: 'offline', selected: false},
        ];

        let stateSelectorNode = this.stateQuerySelector = new QuerySelector({
            title: '坐席状态：',
            visible: true,
            data: optionData,
        });
        stateSelectorNode.onSelected = (item) => {
            let selectedLength = stateSelectorNode.selectedOptions().length;
            // 当item是all时不增加监控组标签
            'all' === item.value || this.refreshActiveTab();
            // 点击全选或者除全选外全部被选中时
            if ('all' === item.value || selectedLength === (optionData.length - 1)) {
                stateSelectorNode.selectAll();
            }
        };
        stateSelectorNode.onDeselecting = (item) => {
            let selectedLength = stateSelectorNode.selectedOptions().length;
            // 不允许全部取消，或最后一个选项不允许取消
            return ('all' !== item.value && selectedLength > 1);
        };
        stateSelectorNode.onDeselected = (item) => {
            let selectedLength = stateSelectorNode.selectedOptions().length;
            // 当item是all时不删除监控组标签
            'all' === item.value || this.refreshActiveTab();
            // 当全选状态时取消一个非全选选项
            if ((selectedLength === optionData.length -1) && 'all' !== item.value) {
                stateSelectorNode.deselect(0, true);
            }
        };
        return stateSelectorNode.create().rootNode;
    }

    /**
     * 生成显示类型选择器
     * @private
     */
    _generateTypeSelector() {
        let optionData = [
            {value: 'graph', name: '图表', selected: true},
            {value: 'table', name: '表格', selected: false},
        ];
        let typeSelectorNode = this.typeQuerySelector = new QuerySelector({
            title: '显示类型：',
            visible: true,
            data: optionData,
            multiple: false,
        });
        typeSelectorNode.onSelected = (item) => {
            this.tabControls.get(item.value).show();
            this.refreshActiveTab();
        };
        typeSelectorNode.onDeselected = (item) => {
            this.tabControls.get(item.value).hide();
        };
        this._generateContent();
        return typeSelectorNode.create().rootNode;
    }

    /**
     * 生成坐席监控展示区域
     * @private
     */
    _generateContent() {
        let monitorGroups =  [...this._monitorGroupMap.values()];
        let graphTabs = new TabControl();
        let tableTabs = new TabControl();

        monitorGroups.forEach((group, i) =>{
            let agentGraphBox = new AgentGraph({
                boxClassName: 'panel-body',
                agents: group.agents,
                onStateMenuClick: this.onStateMenuClick,
                onOperateMenuClick: this.onOperateMenuClick,
                onCreated: this.createdAgentInfoHandler.bind(this),
                onUpdatingAgentInfo: this.updatingAgentInfoHandler.bind(this),
            });
            this._graphBoxs.set(group.id, agentGraphBox);
            let agentTableBox = new AgentTable({
                boxClassName: 'panel-body',
                agents: group.agents,
                onStateMenuClick: this.onStateMenuClick,
                onOperateMenuClick: this.onOperateMenuClick,
                onCreated: this.createdAgentInfoHandler.bind(this),
                onUpdatingAgentInfo: this.updatingAgentInfoHandler.bind(this),
            });
            this._tableBoxs.set(group.id, agentTableBox);
            graphTabs.add({
                id: group.id, title: group.name, element: agentGraphBox.create().rootNode,
                closable: false,
            });
            tableTabs.add({
                id: group.id, title: group.name, element:agentTableBox.create().rootNode,
                closable: false,
            });
        });
        graphTabs.selectById(monitorGroups[0].id);
        tableTabs.selectById(monitorGroups[0].id);
        // 选中后新新当前tab
        graphTabs.onSelected = (tab, newIndex) => {
            this.refreshActiveTab(tab.id);
        };
        tableTabs.onSelected = (tab, newIndex) => {
            this.refreshActiveTab(tab.id);
        };
        this.tabControls.set('graph', graphTabs);
        this.tabControls.set('table', tableTabs);

        this.typeQuerySelector.data.forEach((option) => {
            if (!option.selected) {
                this.tabControls.get(option.value).hide();
            }
        });
    }

    /**
     * 生成坐席状态栏
     * @private
     */
    _generateAgentStateBar() {
        // 创建状态栏
        let agentStateBar = new AgentStateBar().create();
        this._agentMonitorInfo.on('statisticChange', (beforeState, afterState) => {
            agentStateBar.updateStateTotal(beforeState, this._agentMonitorInfo.getStateCount(beforeState));
            agentStateBar.updateStateTotal(afterState, this._agentMonitorInfo.getStateCount(afterState));
        });
        agentStateBar.updateStateTotal('total', this._agents.size);
        agentStateBar.updateStateTotal('offline', this._agents.size);
        return agentStateBar.rootNode;
    }

    /**
     * 增加监控组
     * @param id 监控组的ID
     */
    addMonitorGroup(id) {
        let monitorGroup = this._monitorGroupMap.get(id);
        for (let [key, tabControl] of this.tabControls.entries()) {
            // 添加一个空的tab，当执行refreshActiveTab时会刷新当前content
            tabControl.add({
                id: id, title: monitorGroup.name, element: document.createElement('div'),
                closable: false,
            });
            if (this.typeQuerySelector.isSelectedByValue(key)) {
                tabControl.selectById(id);
            }
        }
    }

    /**
     * 移除监控组
     * @param id 监控组的ID
     */
    removeMonitorGroup(id) {
        for (let tabControl of this.tabControls.values()) {
            let tab = tabControl.getTabById(id);
            tabControl.remove(tab);
        }
    }

    /**
     * 刷新激活的tab
     * @param id 监控组ID，当不为空时强制刷新指定id的监控组
     */
    refreshActiveTab(id) {
        let selectedOption = this.typeQuerySelector.selectedOptions()[0];
        let tabControl = this.tabControls.get(selectedOption.value);
        id = (id || tabControl.getActiveTab().id);
        if (selectedOption.value === 'graph') {
            let agentGraphBox = this._graphBoxs.get(id);
            agentGraphBox.graphList.forEach(g => g.refresh());
            tabControl.updateContent(id, agentGraphBox.rootNode);
        } else if (selectedOption.value === 'table') {
            let agentTableBox = this._tableBoxs.get(id);
            agentTableBox.rows.forEach(t => t.refresh());
            tabControl.updateContent(id, agentTableBox.rootNode);
        }
    }

    /**
     * 坐席UI创建完毕后处理
     * @param component 坐席UI组件
     */
    createdAgentInfoHandler(component) {
        let isVisible = this.stateQuerySelector.isSelectedByValue(component.agentInfo.state);
        // 判断是否强制显示
        if (isVisible && component.isHidden()) {
            component.show();
        }
        // 判断是否强制隐藏
        if (!isVisible && !component.isHidden()){
            component.hide();
        }
    }

    /**
     * 坐席信息更新事件前的操作，返回false将停止更新
     * @param agentInfo 坐席信息
     * @param component 坐席UI组件
     * @returns {T|*|boolean}
     */
    updatingAgentInfoHandler(agentInfo, component) {
        let selectedOption = this.typeQuerySelector.selectedOptions()[0];
        // 判断是否显示，只有用户可见的才更新DOM
        return (
            selectedOption &&
            this.tabControls.get(selectedOption.value).getActiveContentElement().contains(component.rootNode)
        )
    }


    destroy() {
        if (this.rootNode && this.rootNode.parentNode) {
            this.rootNode.parentNode.removeChild(this.rootNode);
        }
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
