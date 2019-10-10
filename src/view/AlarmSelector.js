import AgentInfo from "../model/AgentInfo";

/**
 * 多条件查询选中器
 */
export class AlarmSelector {
    constructor({
        title = '',
        visible = true,
        data = [],
        multiple = true,
    }) {
        /**
         * 将要选中选项时的事件，可自定义该方法
         * @param option {Object} 将要被选中的选项配置
         * @returns {boolean} 若返回false可阻止选中选项
         */
        this.onSelecting = function (option) { return true };

        /**
         * 选中选项时的事件，可自定义该方法
         */
        this.onSelected = function () { };

        /**
         * 将要取消选中选项时的事件，可自定义该方法
         * @param option {Object} 将要被取消选中的选项配置
         * @returns {boolean} 若返回false可阻止取消选中选项
         */
        this.onDeselecting = function (option) { return true };

        /**
         * 取消选中选项时的事件，可自定义该方法
         */
        this.onDeselected = function () { };

        this._title = title;
        this._visible = visible;
        this._initOptionData = data;
        this._multiple = multiple;

        /**
         * 选项实际数据
         * @type {Array}
         * @private
         */
        this._data = [];
        /**
         * 缓存选项HTMLElement
         * @type {Array}
         * @private
         */
        this._optionElements = [];
    }

    create() {
        if (!this.rootNode) {
            let rootNode = this.rootNode = document.createElement('div');

            let titleNode = document.createElement('div');
            titleNode.className = 'option_title';
            titleNode.innerText = this._title;
            this._visible || (rootNode.style.display = 'none');

            let optionsRootNode = document.createElement('div');
            optionsRootNode.className = 'options';
            optionsRootNode.appendChild(this._optionsNode = document.createElement('ul'));

            let localData = JSON.parse(localStorage.getItem('alarmOptionDatas'));

            if (localData !== null) {
                localData.forEach(this.addOption.bind(this));
            } else {
                this._initOptionData.forEach(this.addOption.bind(this));
            }

            rootNode.appendChild(titleNode);
            rootNode.appendChild(optionsRootNode);
        }
        return this;
    }

    /**
     * 增加一个选项
     * @param optionData
     */
    addOption(optionData) {
        let listNode = document.createElement('li');
        if (optionData.selected) {
            listNode.className = 'active';
        };
        listNode.id = this.alarmState(optionData);
        listNode.innerText = optionData.name;

        let localData = localStorage.getItem('alarmOptionDatas');
        // 判断是否从未监控过
        if (localData === null) {
            this.addNode(this._data,optionData,listNode);
            localStorage.setItem('alarmOptionDatas', JSON.stringify(this._data));
        } else {
            // 获取当前数据状态，与循环中的数据进行比对
            let nowSts = this.alarmState(optionData);
            let nowTime = this.alarmTime(optionData);
            let tempData = this._data;
            let stsData = [];
            for (let i = 0; i < this._data.length; i++) {
                let forSts = this.alarmState(this._data[i]);
                stsData.push(forSts);
            };
            let indexVal = stsData.indexOf(nowSts);
            // 判断告警状态与之前状态是否相同
            if (indexVal != -1) {
                let tempOption = this._data[indexVal];
                let tempTime = this.alarmTime(tempOption);
                let tempState = this.alarmState(tempOption);
                // 判断状态相同时，告警时间是否相同
                if (tempTime == nowTime) {
                    return;
                } else {
                    let tip = confirm(`${AgentInfo.stateDict[tempState].name} 告警状态已经存在，确定要替换吗？`);
                    if (tip == true) {
                        tempData[indexVal] = optionData
                        this._optionElements[indexVal] = listNode;

                        let oldNode = this._optionsNode.children[indexVal];
                        this._optionsNode.replaceChild(listNode,oldNode);
                        listNode.onclick = this.optionClick.bind(this, indexVal);
                    } else {
                        return;
                    }
                };
            } else {
                this.addNode(tempData,optionData,listNode);
            };
            this._data = tempData;
            localStorage.setItem('alarmOptionDatas', JSON.stringify(this._data));
        };
    }

    addNode(totalData,optionData,listNode) {
        totalData.push(optionData);
        this._optionElements.push(listNode);
        this._optionsNode.appendChild(listNode);
        listNode.onclick = this.optionClick.bind(this, totalData.length - 1);
    }

    /**
     * 获取告警状态
     * @param v
     */
    alarmState(v) {
        let _value = v.value;
        let value_state = _value.substring(_value.lastIndexOf('{') + 1, _value.lastIndexOf('}') - 1);
        return value_state.toLocaleLowerCase()
    }

    /**
     * 获取告警时间
     * @param v
     */
    alarmTime(v) {
        let _value = v.value;
        let time = _value.substring(_value.lastIndexOf('>') + 1)
        return time
    }

    optionClick(index) {
        let element = this._optionElements[index];
        if (!element.classList.contains('active')) {
            // 单选时取消所有已选
            if (this._multiple === false) {
                this.deselectAll();
            }
            this.select(index);
        }
        // 多选时再次点击取消选中
        else if (this._multiple === true) {
            this.deselect(index);
        }
    }

    /**
     * 选中
     * @param index 数据索引
     * @param forcible 强制选中，只针对原状态为未选中时有效
     */
    select(index, forcible) {
        // 已经选中不需要继续选中
        let option = this._data[index];
        if (option.selected === true) {
            return;
        }
        if (!forcible && !this.onSelecting(option)) {
            return;
        }
        let element = this._optionElements[index];
        element.classList.add('active');
        option.selected = true;
        this.onSelected(option);
    }

    /**
     * 取消选中
     * @param index 数据索引
     * @param forcible 强制取消，只针对原状态为未取消时有效
     */
    deselect(index, forcible) {
        // 已经取消选中不需要继续取消
        let option = this._data[index];
        if (option.selected === false) {
            return;
        }
        if (!forcible && !this.onDeselecting(option)) {
            return;
        }
        let element = this._optionElements[index];
        element.classList.remove('active');
        option.selected = false;
        this.onDeselected(option);
    }

    /**
     * 全选
     */
    selectAll() {
        this._optionElements.forEach((element, index) => {
            if (!element.classList.contains('active')) {
                this.select(index);
            }
        });
    }

    /**
     * 反全选
     */
    deselectAll() {
        this._optionElements.forEach((element, index) => {
            if (element.classList.contains('active')) {
                this.deselect(index);
            }
        });
    }

    /**
     * 获取已经选中的
     * @returns {T[]}
     */
    selectedOptions() {
        return this._data.filter(i => i.selected);
    }

    isSelectedByIndex(index) {
        return this._data[index].selected;
    }

    isSelectedByValue(v) {
        let selected = false;
        this._data.forEach((d) => {
            if (d.value === v && d.selected === true) {
                selected = true;
            }
        });
        return selected;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get visible() {
        return this._visible;
    }

    set visible(value) {
        this._visible = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }
}
