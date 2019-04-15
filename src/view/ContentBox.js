let autoIncrementId = 0;

/**
 * 内容盒子，公共的用于实现盒子样式
 */
class ContentBox {

    constructor({
                    className = 'cc-box-content',
                    visible = true
                }) {
        this.id = `ContentBox-${autoIncrementId++}`;
        this._className = className;
        this._visible = visible;
    }

    create() {
        if (!this.rootNode) {
            let rootNode = this.rootNode = document.createElement('div');
            rootNode.id = this.id;
            rootNode.className = this._className;

            this._visible || this.hide();

            let contentNode = this.generateContentNode();
            !contentNode || rootNode.appendChild(contentNode);
        }
        return this;
    }

    /**
     * 空方法，子类实现具体展示内容节点
     * @returns {HTMLElement}
     */
    generateContentNode() {}

    destroy() {
        if (this.rootNode && this.rootNode.parentNode) {
            this.rootNode.parentNode.removeChild(this.rootNode);
        }
    }

    show() {
        this._visible = true;
        this.rootNode.style.display = 'block';
        return this;
    }

    hide() {
        this._visible = false;
        this.rootNode.style.display = 'none';
        return this;
    }
}

export default ContentBox;
