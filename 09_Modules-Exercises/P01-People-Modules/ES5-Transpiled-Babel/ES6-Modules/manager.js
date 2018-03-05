'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Manager = undefined;

var _employee = require('./employee');

class Manager extends _employee.Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }

    getSalary() {
        return this.salary + this.dividend;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map