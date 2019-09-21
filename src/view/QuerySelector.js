/**
 * 多条件查询选中器
 */
export class QuerySelector {
    constructor({
                    title = '',
                    visible = true,
                    data = [],
                    multiple = true,
                    alarm = false,
                }) {
        /**
         * 将要选中选项时的事件，可自定义该方法
         * @param option {Object} 将要被选中的选项配置
         * @returns {boolean} 若返回false可阻止选中选项
         */
        this.onSelecting = function (option) {return true};

        /**
         * 选中选项时的事件，可自定义该方法
         */
        this.onSelected = function () {};

        /**
         * 将要取消选中选项时的事件，可自定义该方法
         * @param option {Object} 将要被取消选中的选项配置
         * @returns {boolean} 若返回false可阻止取消选中选项
         */
        this.onDeselecting = function (option) {return true};

        /**
         * 取消选中选项时的事件，可自定义该方法
         */
        this.onDeselected = function () {};

        this._title = title;
        this._visible = visible;
        this._initOptionData = data;
        this._multiple = multiple;
        this._alarm = alarm;

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

            let localData = JSON.parse(localStorage.getItem('optionDatas'));

            if (this._alarm === true && initOptionData !== null) {
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
        for (let item of this._data) {
            if (this.alarmState(item) == this.alarmState(optionData) && this.alarmTime(item) == this.alarmTime(optionData)) {
                return
            }
        };

      
        let listNode = document.createElement('li');
        if (optionData.selected) {
            listNode.className = 'active';
        };
        listNode.innerText = optionData.name;

        let index = this._data.push(optionData) - 1;
        listNode.onclick = this.optionClick.bind(this, index);

        if (this._alarm === true) {
            localStorage.setItem('optionDatas',JSON.stringify(this._data));

        }
        this._optionElements.push(listNode);
        this._optionsNode.appendChild(listNode);
    }

    /**
     * 获取告警状态
     * @param v
     */
    alarmState(v) {
        let _value = v.value;
        let value_state = _value.substring(_value.lastIndexOf('{')+1,_value.lastIndexOf('}')-1);
        return value_state.toLocaleLowerCase() 
    }

    /**
     * 获取告警时间
     * @param v
     */
    alarmTime(v) {
        let _value = v.value;
        let time = _value.substring(_value.lastIndexOf('>')+1)
        return time
    }

    
    exists(data, optionData) {
        let status = alarmState(optionData);
        let flag = false;
        for (let i = 0; i < data.length; i++) {
            if (alarmState(data[i]) === status) {
                flag = true;
                if (JSON.stringify(data[i]) !== JSON.stringify(optionData)) {
                    data[i] = optionData;
                    localStorage.setItem('optionDatas', JSON.stringify(data));
                    break;
                }
            }
        }
        if (!flag) {
            data.push(optionData);
            localStorage.setItem('optionDatas', JSON.stringify(data));
        }
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
