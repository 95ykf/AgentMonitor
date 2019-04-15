/**
 * 标签页对象
 */
class TabPage {

    /**
     * @param id {String} 标签页唯一标识
     * @param title {String} 标签页标题
     * @param enable {Boolean} 是否启用
     * @param closable {Boolean} 是否可关闭
     * @param visible {Boolean} 是否可视
     */
    constructor({
                    id = '',
                    title = '',
                    enable = true,
                    closable = true,
                    visible = true,
                }) {
        this._id = id;
        this._title = title;
        this._enable = enable;
        this._closable = closable;
        this._visible = visible;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get enable() {
        return this._enable;
    }

    set enable(value) {
        this._enable = value;
    }

    get closable() {
        return this._closable;
    }

    set closable(value) {
        this._closable = value;
    }

    get visible() {
        return this._visible;
    }

    set visible(value) {
        this._visible = value;
    }
}

export default TabPage;
