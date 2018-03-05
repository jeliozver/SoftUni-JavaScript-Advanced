class Turtle {
    constructor(name, age, gender) {
        if (new.target === Turtle) {
            throw new Error("Cannot be instantiated!");
        }

        this._name = name;
        this._age = Number(age);
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get gender() {
        return this._gender;
    }

    grow(age) {
        this._age += age;
    }

    toString() {
        return `Turtle: ${this.name}\nAged - ${this.age}; Gender - ${this.gender}\n`;
    }
}

module.exports = Turtle;