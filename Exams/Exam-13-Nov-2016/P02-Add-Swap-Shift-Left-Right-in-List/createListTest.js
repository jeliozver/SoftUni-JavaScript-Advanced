let createList = require('./createList').createList;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test list data structure", () => {
    let list;
    beforeEach(() => {
        list = createList();
    });

    describe("General tests", () => {
        it("should return an object", () => {
            expect(Object.prototype.toString.call(list)).to.equal('[object Object]');
        });

        it("should have property add", () => {
            expect(list.hasOwnProperty('add')).to.be.true;
        });

        it("add should be a function", () => {
            expect(typeof list.add).to.equal('function');
        });

        it("should have property shiftLeft", () => {
            expect(list.hasOwnProperty('shiftLeft')).to.be.true;
        });

        it("shiftLeft should be a function", () => {
            expect(typeof list.shiftLeft).to.equal('function');
        });

        it("should have property shiftRight", () => {
            expect(list.hasOwnProperty('shiftRight')).to.be.true;
        });

        it("shiftRight should be a function", () => {
            expect(typeof list.shiftRight).to.equal('function');
        });

        it("should have property swap", () => {
            expect(list.hasOwnProperty('swap')).to.be.true;
        });

        it("swap should be a function", () => {
            expect(typeof list.swap).to.equal('function');
        });

        it("should have property add", () => {
            expect(list.hasOwnProperty('toString')).to.be.true;
        });

        it("toString should be a function", () => {
            expect(typeof list.toString).to.equal('function');
        });

        it("list should be empty in the beginning", () => {
            expect(list.toString()).to.equal('');
        });
    });

    describe("Invalid input tests", () => {
        it("shiftLeft should not crash or change the list if its empty", () => {
            list.shiftLeft();
            expect(list.toString()).to.equal('');
        });

        it("shiftRight should not crash or change the list if its empty", () => {
            list.shiftRight();
            expect(list.toString()).to.equal('');
        });

        it("shiftLeft should not crash or change the list with one element", () => {
            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.equal('1');
        });

        it("shiftRight should not crash or change the list with one element", () => {
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.equal('1');
        });

        it("swap should return false if first index is not an integer", () => {
            list.add(1);
            list.add(2);
            expect(list.swap(0.1, 1)).to.be.false;
        });

        it("swap should not change the list if first index is not an integer", () => {
            list.add(1);
            list.add(2);
            list.swap(0.1, 1);
            expect(list.toString()).to.equal('1, 2');
        });

        it("swap should return false if second index is not an integer", () => {
            expect(list.swap(1, {})).to.be.false;
        });

        it("swap should not change the list if second index is not an integer", () => {
            list.add(1);
            list.add(2);
            list.swap(1, {});
            expect(list.toString()).to.equal('1, 2');
        });

        it("swap should return false if first index is a negative integer", () => {
            list.add(1);
            list.add(2);
            expect(list.swap(-2, 1)).to.be.false;
        });

        it("swap should not change the list if first index is a negative integer", () => {
            list.add(1);
            list.add(2);
            list.swap(-2, 1);
            expect(list.toString()).to.equal('1, 2');
        });

        it("swap should return false if second index is a negative integer", () => {
            list.add(1);
            list.add(2);
            expect(list.swap(0, -10)).to.be.false;
        });

        it("swap should not change the list if second index is a negative integer", () => {
            list.add(1);
            list.add(2);
            list.swap(0, -10);
            expect(list.toString()).to.equal('1, 2');
        });

        it("swap should return false if the first index is not in the current list bounds", () => {
            list.add(1);
            list.add(2);
            expect(list.swap(2, 0)).to.be.false;
        });

        it("swap should should not change the list if first index is not in the current list bounds", () => {
            list.add(1);
            list.add(2);
            list.swap(2, 0);
            expect(list.toString()).to.equal('1, 2');
        });

        it("swap should return false if the second index is not in the current list bounds", () => {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 2)).to.be.false;
        });

        it("swap should should not change the list if second index is not in the current list bounds", () => {
            list.add(1);
            list.add(2);
            list.swap(1, 3);
            expect(list.toString()).to.equal('1, 2');
        });

        it("swap should return false if the first index and second index are the same", () => {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 1)).to.be.false;
        });

        it("swap should not change the list if the first index and second index are the same", () => {
            list.add(1);
            list.add(2);
            list.swap(1, 1);
            expect(list.toString()).to.equal('1, 2');
        });
    });

    describe("add function tests", () => {
        it("should append the items at the end of the list test 1", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let items = list.toString().split(', ');
            expect(items[items.length - 1]).to.equal('3');
        });

        it("should append the items at the end of the list test 2", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('cuatro');
            let items = list.toString().split(', ');
            expect(items[items.length - 1]).to.equal('cuatro');
        });
    });

    describe("shiftLeft function tests", () => {
        it("should rotate left properly test 1", () => {
            list.add({test:'test'});
            list.add(2);
            list.add(3);
            list.add([1, 2, 3]);
            list.shiftLeft();
            expect(list.toString()).to.equal('2, 3, 1,2,3, [object Object]');
        });

        it("should rotate left properly test 2", () => {
            list.add('test');
            list.add(3);
            list.add([1, 2, 3]);
            list.add({test:'test'});
            list.shiftLeft();
            list.shiftLeft();
            expect(list.toString()).to.equal('1,2,3, [object Object], test, 3');
        });
    });

    describe("shiftRight function tests", () => {
        it("should rotate right properly test 1", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('cuatro');
            list.shiftRight();
            expect(list.toString()).to.equal('cuatro, 1, 2, 3');
        });

        it("should rotate right properly test 2", () => {
            list.add({test:'test'});
            list.add(2);
            list.add(3);
            list.add([1, 2, 3]);
            list.shiftRight();
            list.shiftRight();
            expect(list.toString()).to.equal('3, 1,2,3, [object Object], 2');
        });
    });

    describe("swap function tests", () => {
        it("should return true if first index is 0", () => {
            list.add(1);
            list.add(2);
            expect(list.swap(0, 1)).to.be.true;
        });

        it("should swap properly when first index is 0", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(0, 2);
            expect(list.toString()).to.equal('3, 2, 1');
        });

        it("should return true if second index is 0", () => {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 0)).to.be.true;
        });

        it("should swap properly when second index is 0", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(2, 0);
            expect(list.toString()).to.equal('3, 2, 1');
        });
    });

    describe("toString function tests", () => {
        it("should return a string", () => {
            expect(typeof list.toString()).to.equal('string');
        });
    });
});