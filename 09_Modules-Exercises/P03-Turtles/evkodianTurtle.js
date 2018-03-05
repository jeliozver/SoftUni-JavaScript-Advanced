let Turtle = require('./turtle');

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this.evkodiumValue = evkodiumValue;
        this._evkodium = {}
    }

    get evkodium() {
        this._evkodium.value = this.evkodiumValue;
        this._evkodium.density = this.getDensity();
        return this._evkodium;
    }

    getDensity() {
        if (this.gender === 'male') {
            return this.age * 3;
        }

        return this.age * 2;
    }

    toString() {
        return super.toString() + `Evkodium: ${this.evkodium.value * this.evkodium.density}`;
    }
}

module.exports = EvkodianTurtle;