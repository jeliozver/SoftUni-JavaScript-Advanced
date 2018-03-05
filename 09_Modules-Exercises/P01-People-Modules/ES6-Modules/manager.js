import { Employee } from "./employee";

export class Manager extends Employee {
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