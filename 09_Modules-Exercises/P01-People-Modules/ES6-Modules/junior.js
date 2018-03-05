import { Employee } from "./employee";

export class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a simple task.');
    }
}