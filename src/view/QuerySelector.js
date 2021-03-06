/**
 * 多条件查询选中器
 */
export class QuerySelector {
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
        this._data = data;
        this._multiple = multiple;

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
            let optionsNode = document.createElement('ul');
            this._data.forEach((item, index) => {
                let listNode = document.createElement('li');
                if (item.selected) {
                    listNode.className = 'active';
                }
                listNode.innerText = item.name;
                listNode.onclick = this.optionClick.bind(this, index);
                optionsNode.appendChild(listNode);
                this._optionElements.push(listNode);
            });
            optionsRootNode.appendChild(optionsNode);

            rootNode.appendChild(titleNode);
            rootNode.appendChild(optionsRootNode);
        }
        return this;
    }

    optionClick(index) {
        let element = this._optionElements[index];
        if (!element.classList.contains('active')) {
            if (this._multiple === false) {
                this.deselectAll();
            }
            this.select(index);
        } else if (this._multiple === true) {
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
