let createList = require('./listDataStructure');
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test listDatStructure", () => {

    // Uncomment next 4 lines to test locally
    // let list;
    // beforeEach(function () {
    //     list = createList();
    // });

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

        it("should have property delete", () => {
            expect(list.hasOwnProperty('delete')).to.be.true;
        });

        it("delete should be a function", () => {
            expect(typeof list.delete).to.equal('function');
        });

        it("should have property toString", () => {
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
        it("delete should return undefined when index is not an integer", () => {
            list.add(1);
            list.add(2);
            expect(list.delete('one')).to.be.undefined;
        });

        it("delete should not remove anything when when index is not an integer", () => {
            list.add(1);
            list.add(2);
            list.delete('one');
            expect(list.toString()).to.equal('1, 2');
        });

        it("delete should return undefined when index is a negative integer", () => {
            expect(list.delete(-1)).to.be.undefined;
        });

        it("delete should not remove anything when index is a negative integer", () => {
            list.add(1);
            list.add(2);
            list.delete(-1);
            expect(list.toString()).to.equal('1, 2');
        });

        it("delete should return undefined when index is not in the current list bounds", () => {
            expect(list.delete(2)).to.be.undefined;
        });

        it("delete should not remove anything when index is not in the current list bounds", () => {
            list.add(1);
            list.add(2);
            list.delete(2);
            expect(list.toString()).to.equal('1, 2');
        });
    });

    describe("add function tests", () => {
        it("should append the items at the end of the list", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let items = list.toString().split(', ');
            expect(items[items.length - 1]).to.equal('3');
        });

        it("should work with strings", () => {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('cuatro');
            let items = list.toString().split(', ');
            expect(items[items.length - 1]).to.equal('cuatro');
        });

        it("should work with objects", () => {
            list.add(1);
            list.add(2);
            list.add({test:'test'});
            let items = list.toString().split(', ');
            expect(items[items.length - 1]).to.equal('[object Object]');
        });

        it("should work with arrays", () => {
            list.add(1);
            list.add(2);
            list.add([3.14, 1.61, 2.16]);
            let items = list.toString().split(', ');
            expect(items[items.length - 1]).to.equal('3.14,1.61,2.16');
        });
    });

    describe("delete function tests", () => {
        it("delete should return the proper value when index is 0", () => {
            list.add(1);
            list.add(2);
            expect(list.delete(0)).to.equal(1);
        });

        it("delete should return the proper item when index is 0", () => {
            list.add(1);
            list.add(2);
            list.add([3.14, 1.61, 2.16]);
            list.delete(0);
            expect(list.toString()).to.equal('2, 3.14,1.61,2.16');
        });

        it("delete should return the proper value when trying to remove the last item", () => {
            list.add(1);
            list.add(2);
            list.add([3.14, 1.61, 2.16]);
            let lastIndex = list.toString().split(', ').length - 1;
            expect(list.delete(lastIndex).toString())
                .to.equal([3.14, 1.61, 2.16].toString());
        });

        it("delete should be able to remove the last item", () => {
            list.add(1);
            list.add(2);
            list.add([3.14, 1.61, 2.16]);
            let lastIndex = list.toString().split(', ').length - 1;
            list.delete(lastIndex);
            expect(list.toString()).to.equal('1, 2');
        });
    });

    describe("toString function tests", () => {
        it("should return a string", () => {
            list.add(1);
            list.add(2);
            expect(typeof list.toString()).to.equal('string');
        });
    });
});