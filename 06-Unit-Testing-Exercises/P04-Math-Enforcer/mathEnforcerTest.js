let mathEnforcer = require('./mathEnforcer').mathEnforcer;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test mathEnforcer", () => {
    describe("General tests", () => {
        it("should be an object", () => {
           expect(Object.prototype.toString.call(mathEnforcer)).to.equal('[object Object]');
        });
    });

    describe("addFive function tests", () => {
        it("should have property addFive", () => {
           expect(mathEnforcer.hasOwnProperty('addFive')).to.be.true;
        });

        it("should be a function", () => {
            expect(typeof mathEnforcer.addFive).to.equal('function');
        });

        it("should return undefined if the parameter is not a number", () => {
           expect(mathEnforcer.addFive([1, 2, 3])).to.equal(undefined);
        });

        it("should return 10 if parameter is 5", () => {
           expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it("should return -2 if parameter is -7", () => {
            expect(mathEnforcer.addFive(-7)).to.equal(-2);
        });

        it("should return 8.14 if parameter is 3.14", () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });

        it("should return 1.86 if parameter is -3.14", () => {
            expect(mathEnforcer.addFive(-3.14)).to.be.closeTo(1.86, 0.01);
        });

    });

    describe("subtractTen function tests", () => {
        it("should have property subtractTen", () => {
            expect(mathEnforcer.hasOwnProperty('subtractTen')).to.be.true;
        });

        it("should be a function", () => {
            expect(typeof mathEnforcer.subtractTen).to.equal('function');
        });

        it("should return undefined if the parameter is not a number", () => {
            expect(mathEnforcer.subtractTen('232')).to.equal(undefined);
        });

        it("should return -1 if parameter is 9", () => {
           expect(mathEnforcer.subtractTen(9)).to.equal(-1);
        });

        it("should return 19 if parameter is -9", () => {
            expect(mathEnforcer.subtractTen(-9)).to.equal(-19);
        });

        it("should return -8.39 if parameter is 1.61", () => {
            expect(mathEnforcer.subtractTen(1.61)).to.be.closeTo(-8.39, 0.01);
        });

        it("should return -15.66 if parameter is -5.66", () => {
            expect(mathEnforcer.subtractTen(-5.66)).to.be.closeTo(-15.66, 0.01);
        });

    });

    describe("sum function tests", () => {
        it("should have property sum", () => {
            expect(mathEnforcer.hasOwnProperty('sum')).to.be.true;
        });

        it("should be a function", () => {
            expect(typeof mathEnforcer.sum).to.equal('function');
        });

        it("should return undefined if first parameter is not a number", () => {
            expect(mathEnforcer.sum({'1':1}, 33)).to.equal(undefined);
        });

        it("should return undefined if second parameter is not a number", () => {
            expect(mathEnforcer.sum(33, '343')).to.equal(undefined);
        });

        it("should return undefined if both parameters are not numbers", () => {
            expect(mathEnforcer.sum([1.2], '343')).to.equal(undefined);
        });

        it("should return 12 for (8, 4)", () => {
            expect(mathEnforcer.sum(8, 4)).to.equal(12);
        });

        it("should return -4 for (-8, 4)", () => {
            expect(mathEnforcer.sum(-8, 4)).to.equal(-4);
        });

        it("should return -20 for (-8, -12)", () => {
            expect(mathEnforcer.sum(-8, -12)).to.equal(-20);
        });

        it("Should return 2.2 for (1.1, 1.1)", () => {
            expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.01);
        });

        it("Should return 1.53 for (3.14, -1.61)", () => {
            expect(mathEnforcer.sum(3.14, -1.61)).to.be.closeTo(1.53, 0.01);
        });

        it("Should return -4.75 for (-3.14, -1.61)", () => {
            expect(mathEnforcer.sum(-3.14, -1.61)).to.be.closeTo(-4.75, 0.01);
        });
    });
});