"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Junior = undefined;

var _employee = require("./employee");

class Junior extends _employee.Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a simple task.');
    }
}
exports.Junior = Junior;
//# sourceMappingURL=junior.js.map