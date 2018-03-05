class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = Number(age);
        this.position = position;
    }

    toString() {
        return `${this.name}, ${this.age} (${this.position})`;
    }
}

module.exports = Employee;