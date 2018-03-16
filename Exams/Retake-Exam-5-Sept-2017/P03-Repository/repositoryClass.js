class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();
        this._id = 0;
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        this._validateEntity(entity);
        this.data.set(this._id, entity);
        return this._id++;
    }

    get(id) {
        this._isEntityExist(id);
        return this.data.get(id);
    }

    update(id, newEntity) {
        this._isEntityExist(id);
        this._validateEntity(newEntity);
        this.data.set(id, newEntity);
    }

    del(id) {
        this._isEntityExist(id);
        this.data.delete(id);
    }

    _validateEntity(entity) {
        let propsKeys = Object.keys(this.props);
        for (let key of propsKeys) {
            if (entity[key] === undefined) {
                throw new Error(`Property ${key} is missing from the entity!`);
            }
        }

        let entityKeys = Object.keys(entity);
        for (let key of entityKeys) {
            if (this.props[key] === undefined) {
                throw new Error(`Property ${key} is missing from the properties!`);
            }
            if (typeof entity[key] !== this.props[key]) {
                throw new TypeError(`Property ${key} is of incorrect type!`);
            }
        }
    }

    _isEntityExist(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
    }
}