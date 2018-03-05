let Turtle = require('./turtle');

class WaterTurtle extends Turtle {
    constructor(name, age, gender, waterPool) {
        super(name, age, gender);
        this._currentWaterPool = waterPool;
    }

    get currentWaterPool() {
        return this._currentWaterPool;
    }

    travel(newWaterPool) {
        this._currentWaterPool = newWaterPool;
        this.grow(5);
    }

    toString() {
        return super.toString() + `Currently inhabiting ${this.currentWaterPool}`;
    }
}

module.exports = WaterTurtle;