let sharedObject = require('./sharedObject').sharedObject;
let mocha = require('mocha');
let expect = require('chai').expect;
let $ = require('jquery');

describe("Test sharedObject", () => {
    describe("General tests", () => {
        it("should be an object", () => {
            expect(Object.prototype.toString.call(sharedObject)).to.equal('[object Object]');
        });

        it("should have property name", () => {
            expect(sharedObject.hasOwnProperty('name')).to.be.true;
        });

        it("should have property income", () => {
            expect(sharedObject.hasOwnProperty('income')).to.be.true;
        });

        it("initial value for name should be null", () => {
            expect(sharedObject.name).to.be.null;
        });

        it("initial value for name input box should be empty string", () => {
            let nameInput = $('#name');
            expect(nameInput.val()).to.equal('');
        });

        it("initial value for income should be null", () => {
            expect(sharedObject.income).to.be.null;
        });

        it("initial value for income input box should be empty string", () => {
            let incomeInput = $('#income');
            expect(incomeInput.val()).to.equal('');
        });
    });

    describe("changeName function tests", () => {
        it("should have property changeName", () => {
            expect(sharedObject.hasOwnProperty('changeName')).to.be.true;
        });

        it("should be a function", () => {
            expect(typeof sharedObject.changeName).to.equal('function');
        });

        it("executing the function with an empty string should not change the value", () => {
            sharedObject.changeName('Lilly');
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('Lilly');
        });

        it("executing the function with an empty string should not change the input box value", () => {
            let nameInput = $('#name');
            sharedObject.changeName('Morgan');
            sharedObject.changeName('');
            expect(nameInput.val()).to.equal('Morgan');
        });

        it("executing the function with 'Dexter' should return 'Dexter'", () => {
            sharedObject.changeName('Dexter');
            expect(sharedObject.name).to.equal('Dexter');
        });

        it("executing the function with 'John' should change the input box value to 'John'", () => {
            let nameInput = $('#name');
            sharedObject.changeName('John');
            expect(nameInput.val()).to.equal('John');
        });
    });

    describe("changeIncome function tests", () => {
        it("should have property changeIncome", () => {
            expect(sharedObject.hasOwnProperty('changeIncome')).to.be.true;
        });

        it("should be a function", () => {
            expect(typeof sharedObject.changeIncome).to.equal('function');
        });

        it("executing the function with a string should not change the value", () => {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome('a');
            expect(sharedObject.income).to.equal(10);
        });

        it("executing the function with a string should not change the income box value", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(12);
            sharedObject.changeIncome('a');
            expect(incomeInput.val()).to.equal('12');
        });

        it("executing the function with a fraction should not change the value", () => {
            sharedObject.changeIncome(20);
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.equal(20);
        });

        it("executing the function with a fraction should not change the income box value", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(80);
            sharedObject.changeIncome(1.61);
            expect(incomeInput.val()).to.equal('80');
        });

        it("executing the function with a negative number should not change the value", () => {
            sharedObject.changeIncome(90);
            sharedObject.changeIncome(-90);
            expect(sharedObject.income).to.equal(90);
        });

        it("executing the function with a negative number should not change the income box value", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(88);
            sharedObject.changeIncome(-88);
            expect(incomeInput.val()).to.equal('88');
        });

        it("executing the function with zero should not change the value", () => {
            sharedObject.changeIncome(22);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(22);
        });

        it("executing the function with zero should not change the income box value", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(55);
            sharedObject.changeIncome(0);
            expect(incomeInput.val()).to.equal('55');
        });

        it("executing the function with a positive integer should change the value", () => {
            sharedObject.changeIncome(99);
            expect(sharedObject.income).to.equal(99);
        });

        it("executing the function with a positive integer should change the income box value", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(222);
            expect(incomeInput.val()).to.equal('222');
        });
    });

    describe("updateName function tests", () => {
        it("should have property updateName", () => {
            expect(sharedObject.hasOwnProperty('updateName')).to.be.true;
        });

        it("should be a function", () => {
            expect(typeof sharedObject.updateName).to.equal('function');
        });

        it("should not change the name property when the name box is an empty string", () => {
            let nameInput = $('#name');
            sharedObject.changeName('Eminem');
            nameInput.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Eminem');
        });

        it("should change the name property when the name box is not an empty string", () => {
            let nameInput = $('#name');
            sharedObject.changeName('Eminem');
            nameInput.val('Marshall Mathers');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Marshall Mathers');
        });
    });

    describe("updateIncome function tests", () => {
        it("should have property updateIncome", () => {
            expect(sharedObject.hasOwnProperty('updateIncome')).to.be.true;
        });

        it("should be a function", () => {
            expect(typeof sharedObject.updateIncome).to.equal('function');
        });

        it("should not change the income property if income box value cannot be parsed to number", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(40);
            incomeInput.val('twenty');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(40);
        });

        it("should not change the income property if income box value is a fraction", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(10);
            incomeInput.val('9.99');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(10);
        });

        it("should not change the income property if income box value is a negative number", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(210);
            incomeInput.val('-9');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(210);
        });

        it("should not change the income property if income box value is zero", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(666);
            incomeInput.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(666);
        });

        it("should change the income property if income box value positive integer", () => {
            let incomeInput = $('#income');
            sharedObject.changeIncome(33);
            incomeInput.val('667');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(667);
        });
    });
});