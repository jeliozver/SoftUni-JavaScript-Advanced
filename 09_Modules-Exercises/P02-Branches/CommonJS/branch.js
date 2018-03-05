let Employee = require('./employee');

class Branch {
    constructor(id, branchName, companyName) {
        this.id = Number(id);
        this.id = id;
        this.branchName = branchName;
        this.companyName = companyName;
        this._employees = [];
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get branchName() {
        return this._branchName;
    }

    set branchName(value) {
        this._branchName = value;
    }

    get companyName() {
        return this._companyName;
    }

    set companyName(value) {
        this._companyName = value;
    }

    get employees() {
        return this._employees;
    }

    hire(employee) {
        if (employee instanceof Employee === false) {
            throw new TypeError('Should be an instance of Employee!');
        }

        this.employees.push(employee);
    }

    toString() {
        let result = `@ ${this.companyName}, ${this.branchName}, ${this.id}\nEmployed:\n`;
        if (this.employees.length === 0) {
            return result + 'None...';
        }

        for (let employee of this.employees) {
            result += `** ${employee.toString()}\n`
        }

        return result.substring(0, result.length - 1);
    }
}

module.exports = Branch;