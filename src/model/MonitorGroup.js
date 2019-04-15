/**
 * 监控组
 */
class MonitorGroup {

    constructor({id, name = '', agents = []} = {}) {
        this._id = id;
        this._name = name;
        this._agents = agents;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get agents() {
        return this._agents;
    }

    set agents(value) {
        this._agents = value;
    }
}

export default MonitorGroup;
