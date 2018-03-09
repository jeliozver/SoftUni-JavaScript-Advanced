let SortedList = require('./sortedListClass').SortedList;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test sortedListClass", () => {
    let list;

    beforeEach(() => {
        list = new SortedList();
    });

    describe("General tests", () => {
        it("constructor should be a function", () => {
            expect(typeof SortedList.constructor).to.equal('function');
        });

        it("constructor should take 0 parameters", () => {
            expect(SortedList.length).to.equal(0);
        });

        it("instance of the created object should be the class constructor", () => {
            let check = list instanceof SortedList;
            expect(check).to.be.true;
        });

        it("should have property add", () => {
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
        });

        it("add should be a function", () => {
            expect(typeof list.add).to.equal('function');
        });

        it("should have property remove", () => {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
        });

        it("remove should be a function", () => {
            expect(typeof list.remove).to.equal('function');
        });

        it("should have property get", () => {
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.true;
        });

        it("get should be a function", () => {
            expect(typeof list.get).to.equal('function');
        });

        it("should have property size", () => {
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.true;
        });

        it("size should only be a getter and return a number", () => {
            expect(typeof list.size).to.equal('number');
        });

        it("size should be 0 when the list is created", () => {
            expect(list.size).to.equal(0);
        });
    });

    describe("Invalid input tests", () => {
        it("remove should throw error when list is empty", () => {
            expect(() => list.remove(0)).to.throw(Error);
        });

        it("remove should throw error with negative index", () => {
            list.add(3);
            list.add(4);
            expect(() => list.remove(-1)).to.throw(Error);
        });

        it("remove should throw error with index bigger than current length", () => {
            list.add(3);
            list.add(4);
            expect(() => list.remove(2)).to.throw(Error);
        });

        it("get should throw error when list is empty", () => {
            expect(() => list.get(0)).to.throw(Error);
        });

        it("get should throw error with negative index", () => {
            list.add(3);
            list.add(4);
            expect(() => list.get(-1)).to.throw(Error);
        });

        it("get should throw error with index bigger than current length", () => {
            list.add(3);
            list.add(4);
            expect(() => list.get(2)).to.throw(Error);
        });
    });

    describe("add method tests", () => {
        it("should add and maintain ascending order at all times", () => {
            list.add(4);
            list.add(1);
            expect(list.get(0)).to.equal(1);
            list.add(7);
            list.add(12);
            list.add(0);
            expect(list.get(0)).to.equal(0);
            expect(list.get(list.size - 1)).to.equal(12);
            expect(list.get(3)).to.equal(7);
        });
    });

    describe("remove method tests", () => {
        it("should remove and maintain ascending order at all times", () => {
            list.add(19);
            list.add(2);
            list.add(3);
            list.add(222);
            list.add(88);
            list.remove(0);
            expect(list.get(0)).to.equal(3);
            expect(list.get(list.size - 1)).to.equal(222);
            list.add(999);
            list.add(1);
            list.add(444);
            list.remove(list.size - 1);
            expect(list.get(list.size - 1)).to.equal(444);
            expect(list.get(4)).to.equal(222);
        });
    });

    describe("get method tests", () => {
        it("should return the correct element", () => {
            list.add(19);
            list.add(2);
            list.add(3);
            list.add(222);
            list.add(88);
            list.remove(0);
            expect(list.get(1)).to.equal(19);
            list.add(100);
            expect(list.get(1)).to.equal(19);
        });
    });

    describe("size property tests", () => {
        it("should return the proper size", () => {
            list.add(3);
            list.add(4);
            list.add(29);
            list.add(11);
            list.add(454);
            expect(list.size).to.equal(5);
            list.add(3.14);
            list.add(222);
            expect(list.size).to.equal(7);
        });
    });
});