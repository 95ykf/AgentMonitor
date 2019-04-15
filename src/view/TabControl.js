import TabPage from './TabPage';
import '../css/tabs.css';

/**
 * 标签页控制对象
 */
class TabControl {

    constructor() {

        /*-----------定义事件[开始]------------*/
        /**
         * 关闭标签页时的事件，可自定义该方法
         * @param tab {Object} 将要关闭的标签
         * @returns {boolean}  返回false可阻止关闭
         */
        this.onClose = function (tab) {return true};

        /**
         * 将要添加标签页时事件
         * @param id {String} 标签页ID
         * @param title {String} 标题
         * @param element {HTMLElement} 要显示HTMLElement
         * @param enable {Boolean} 是否启用
         * @param closable {Boolean} 是否可关闭
         * @param visible {Boolean} 是否可视
         * @returns {boolean} 返回false可阻止新建
         */
        this.onAdding = function ({id, title, element, enable, closable, visible}) {return true};

        /**
         * 添加标签页后的事件
         * @param id {String} 标签页ID
         * @param title {String} 标题
         * @param element {HTMLElement} 要显示HTMLElement
         * @param enable {Boolean} 是否启用
         * @param closable {Boolean} 是否可关闭
         * @param visible {Boolean} 是否可视
         */
        this.onAdded = function ({id, title, element, enable, closable, visible}) {};

        /**
         * 将要选中标签页时的事件
         * @param tab {TabPage} 将要选中的标签页
         * @param index {Number} 将要选中的标签页的索引
         * @returns {boolean} 返回false可阻止重新选择标签页
         */
        this.onSelecting = function (tab, index) {return true};

        /**
         * 选择标签页时的事件
         * @param tab {TabPage} 选中的标签页
         * @param index {Number} 选中的标签页的索引
         */
        this.onSelected = function (tab, index) {};

        /**
         * 将要取消选择标签页时的事件
         * @param tab {TabPage} 将要取消选择的标签页
         * @param index {Number} 将要取消选择的索引
         * @returns {boolean} 返回false可阻止取消选择标签页
         */
        this.onDeselecting = function (tab, index) {return true};

        /**
         * 取消选择标签页时的事件
         * @param tab {TabPage} 取消选择标签页标签页
         * @param index {Number} 取消选择标签页的索引
         */
        this.onDeselected = function (tab, index) {};

        /**
         * 选中的标签页索引改变时事件
         * @param oldIndex {Number} 改变前索引
         * @param newIndex {Number} 改变后索引
         */
        this.onSelectIndexChanged = function (oldIndex, newIndex) {};

        /**
         * 在标签上点击右键时的事件
         * @param tab {TabPage} 被点击的标签
         * @param index {Number} 被点击的标签索引
         * @param x {Number} 鼠标事件的x坐标
         * @param y {Number} 鼠标事件的y坐标
         */
        this.onContextMenu = function (tab, index, x, y) {};
        /*-----------定义事件[结束]------------*/

        this._tabCtrlBar = null;    //控制条容器
        this._tabContent = null;    //内容容器
        this._tabPageMap = new Map(); //标签页对象（Map形式）
        this._tabPageArray = []; //标签页对象（数组形式）
        this._captions = new Map();    //标题对象
        this._contents = new Map();    //内容对象
        this._activeTab = null; //当前激活的标签
        this._activeIndex = -1; //当前激活的标签索引

        this._visible = true;

        this.init();
    }

    init() {
        let tabsContainer = this.tabsContainer = document.createElement('div');
        tabsContainer.className = 'tabs-container';
        this._visible || this.hide();

        this._tabCtrlBar = document.createElement('ul');
        this._tabCtrlBar.className = 'nav nav-tabs clearfloat';
        this._tabContent = document.createElement('div');
        this._tabContent.className = 'tab-content';

        tabsContainer.appendChild(this._tabCtrlBar);
        tabsContainer.appendChild(this._tabContent);

        return this;
    }

    /**
     * 创建标题
     * @param id {String} 标签页ID
     * @param title {String} 标题
     * @param closable {Boolean} 是否可关闭
     * @returns {HTMLLIElement}
     */
    createCaption(id, title, closable) {
        let caption = document.createElement('li');
        caption.id = 'tab_caption_' + id;

        let titleNode = document.createElement('a');
        titleNode.innerText = title;
        caption.appendChild(titleNode);

        if (closable) {
            let closeNode = document.createElement('a');
            closeNode.title = '关闭此标签';
            closeNode.className = 'tab-caption-close';
            closeNode.onclick = (e) => this.handleCloseClickEvent(e, id);
            caption.appendChild(closeNode);
        }

        return caption;
    }

    /**
     * 创建标签页的内容Html
     * @param id {String} 标签页ID
     * @param element {HTMLElement} 要显示HTMLElement
     * @returns {HTMLDivElement}
     */
    createContent(id, element) {
        let content = document.createElement('div');
        content.id = 'tab_content_' + id;
        content.className = 'tab-pane';
        content.appendChild(element);
        return content;
    }

    /**
     * 更新标签页内的显示内容
     * @param id {String} 标签页ID
     * @param element {HTMLElement} 要显示HTMLElement
     * @returns {HTMLDivElement} 标签页内容部分HTMLDivElement
     */
    updateContent(id, element) {
        let content = this._contents.get(id);
        if (content) {
            content.parentNode.removeChild(content);
        }
        content = this.createContent(id, element);
        this._contents.set(id, content);
        this._tabContent.appendChild(content);
        // 判断当前为是否激活标签
        if (id === this._activeTab.id) {
            content.classList.add('active');
        }
        return content;
    }

    getTab(index) {
        return this._tabPageArray[index];
    }

    getTabById(id) {
        return this._tabPageMap.get(id);
    }

    /**
     * 添加标签页
     * @param id {String} 标签页ID
     * @param title {String} 标题
     * @param element {HTMLElement} 要显示HTMLElement
     * @param enable {Boolean} 是否启用
     * @param closable {Boolean} 是否可关闭
     * @param visible {Boolean} 是否可视
     * @returns {number} 标签的索引
     *                  -1      触发事件禁止创建此标签页
     *                  -2      已有同名标签页
     */
    add({
            id = '',
            title = '',
            element = document.createDocumentFragment(),
            enable = true,
            closable = true,
            visible = true,
        }) {
        if (this._tabPageMap.get(id)) {
            return -2;
        }
        //触发onAdding事件
        if (this.onAdding) {
            if (!this.onAdding(arguments)) {
                return -1;
            }
        }

        //创建标题条
        let caption = this.createCaption(id, title, closable);
        this._tabCtrlBar.appendChild(caption);
        //创建内容项
        let content = this.createContent(id, element);
        this._tabContent.appendChild(content);
        //添加到内部数组中
        this._captions.set(id, caption);
        this._contents.set(id, content);

        let tab = new TabPage({id, title, enable, closable, visible});
        this._tabPageMap.set(id, tab);
        this._tabPageArray.push(tab);

        //绑定标签事件
        caption.onselectstart = function () {
            return false;
        };
        caption.onclick = (e) => {
            this.handleCaptionClickEvent(e, id);
        };
        caption.oncontextmenu = (event) => {
            let tabIndex = this._tabPageArray.length - 1;
            this.onContextMenu(tab, tabIndex, event.x, event.y);
            return false;
        };

        //触发onAdded事件
        if (this.onAdded) {
            this.onAdded(arguments);
        }
        return this._tabPageArray.length - 1;
    }

    selectByIndex(index) {
        this.select(this.getTab(index));
    }

    selectById(id) {
        this.select(this.getTabById(id));
    }

    select(tab) {
        if (!tab || tab === this._activeTab) return;    //如果新选择的标签和原选择的标签相同，则返回
        let newIndex = this._tabPageArray.indexOf(tab);
        if (tab && -1 !== newIndex) {
            //触发onDeselecting事件
            if (this.onDeselecting) {
                if (!this.onDeselecting(this._activeTab, this._activeIndex))
                    return;
            }
            //触发onSelecting事件
            if (this.onSelecting) {
                if (!this.onSelecting(tab, newIndex))
                    return;
            }

            try {
                this._captions.get(this._activeTab.id).classList.remove('active');
                this._contents.get(this._activeTab.id).classList.remove('active');
            }
            catch (ex) {
            }
            finally {
                this._captions.get(tab.id).classList.add('active');
                this._contents.get(tab.id).classList.add('active');
            }
            let oldTab = this._activeTab;
            let oldIndex = this._activeIndex;
            this._activeTab = tab;              //更新所选择的标签页
            this._activeIndex = newIndex;       //更新所选择的标签页序号

            //触发onDeselected事件
            if (this.onDeselected) {
                this.onDeselected(oldTab, oldIndex);
            }
            //触发onSelected事件
            if (this.onSelected) {
                this.onSelected(tab, newIndex);
            }
            //触发onSelectIndexChanged事件
            if (this.onSelectIndexChanged) {
                this.onSelectIndexChanged(oldIndex, newIndex);
            }
        }
    }

    /**
     * 添加并选中标签页
     * @param id {String} 标签页ID
     * @param title {String} 标题
     * @param element {HTMLElement} 要显示HTMLElement
     * @param enable {Boolean} 是否启用
     * @param closable {Boolean} 是否可关闭
     * @param visible {Boolean} 是否可视
     * @returns {number} 标签的索引
     *                  -1      触发事件禁止创建此标签页
     *                  -2      已有同名标签页
     */
    addAndSelect({
                     id = '',
                     title = '',
                     element = document.createDocumentFragment(),
                     enable = true,
                     closable = true,
                     visible = true,
                 }) {
        this.add(arguments[0]);
        this.selectById(id);
    }

    remove(tab) {
        if (tab) {
            if (this.size() <= 1) {
                alert('最后一个标签不允许关闭！');
                return;
            }
            this._tabCtrlBar.removeChild(this._captions.get(tab.id));
            this._tabContent.removeChild(this._contents.get(tab.id));
            this._tabPageArray.splice(this._tabPageArray.indexOf(tab), 1);
            this._tabPageMap.delete(tab.id);
            this._captions.delete(tab.id);
            this._contents.delete(tab.id);

            let activeIndex = this.getActiveIndex();
            let actualIndex = this._tabPageArray.indexOf(this._activeTab);
            // 判断删除的是不是当前激活的tab
            if (-1 === actualIndex) {
                // 如果当前激活的tab是最小索引不变，其他情况索引减1
                let _i = activeIndex === 0 ? 0 : activeIndex - 1;
                this.selectByIndex(_i);
            } else if (activeIndex !== actualIndex) {
                this.selectByIndex(actualIndex);
            }
        }
    }

    enable(tab) {
        if (tab) {
            this._contents.get(tab.id).disabled = false;
            tab.enable = true;
        }
    }

    disable(tab) {
        if (tab) {
            this._contents.get(tab.id).disabled = true;
            tab.enable = false;
        }
    }

    show() {
        this._visible = true;
        this.tabsContainer.style.display = 'block';
        return this;
    }

    hide() {
        this._visible = false;
        this.tabsContainer.style.display = 'none';
        return this;
    }

    /**
     * 处理标签上单击事件
     * @param {Event} e
     * @param {String|Number} id tab唯一ID
     */
    handleCaptionClickEvent(e, id) {
        // 过滤关闭按钮点击时的冒泡
        if (e && e.target && !e.target.classList.contains('tab-caption-close')) {
            let sleTab = this.getTabById(id);
            if (sleTab.enable) {
                this.select(sleTab);
            }
        }
    }

    /**
     * 处理关闭按钮的单击事件
     * @param {Event} e
     * @param {String|Number} id tab唯一ID
     */
    handleCloseClickEvent(e, id) {
        let tab = this.getTabById(id);
        if (tab.enable && tab.closable) {
            this.remove(tab);
        }
    }


    size() {
        return this._tabPageArray.length;
    }

    getActiveIndex() {
        return this._activeIndex;
    }

    setActiveIndex(value) {
        this._activeIndex = value;
    }

    getActiveTab() {
        return this._activeTab;
    }

    setActiveTab(value) {
        this._activeTab = value;
        this.select(value);
    }

    getActiveContentElement() {
        return this._contents.get(this._activeTab.id);
    }
}

export default TabControl;
