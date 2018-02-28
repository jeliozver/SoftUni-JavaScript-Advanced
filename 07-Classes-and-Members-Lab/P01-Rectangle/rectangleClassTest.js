let Rectangle = require('./rectangleClass').Rectangle;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test rectangleClass", () => {
    describe("General tests", () => {
        it("constructor should be a function", () => {
           expect(typeof Rectangle.constructor).to.equal('function');
        });

        it("constructor should take 3 parameters", () => {
            expect(Rectangle.length).to.equal(3);
        });

        it("instance of the created object should be the class constructor", () => {
            let rect = new Rectangle(10, 20, 'Red');
            let check = rect instanceof Rectangle;
            expect(check).to.be.true;
        });

        it("calcArea should be a function", () => {
            let rect = new Rectangle(10, 10, "red");
            expect(typeof rect.calcArea).to.equal('function');
        });

        it("calcArea should return number", () => {
            let rect = new Rectangle(10, 10, "red");
            expect(typeof rect.calcArea()).to.equal('number');
        });
    });

    describe("Values tests", () => {
        it("width property should return proper value", () => {
            let rect = new Rectangle(10, 20, 'Red');
            expect(rect.width).to.equal(10);
        });

        it("height property should return proper value", () => {
            let rect = new Rectangle(10, 30, 'Red');
            expect(rect.height).to.equal(30);
        });

        it("color property should return proper value", () => {
            let rect = new Rectangle(10, 30, 'blue');
            expect(rect.color).to.equal('blue');
        });

        it("executing calcArea function should return proper value", () => {
            let rect = new Rectangle(10, 10, 'blue');
            expect(rect.calcArea()).to.equal(100);
        });

        it("setting new value to the width property after initialization should work properly", () => {
            let rect = new Rectangle(10, 10, 'blue');
            rect.width = 100;
            expect(rect.width).to.equal(100);
        });

        it("setting new value to the height property after initialization should work properly", () => {
            let rect = new Rectangle(10, 10, 'blue');
            rect.height = 100;
            expect(rect.height).to.equal(100);
        });

        it("setting new value to the color property after initialization should work properly", () => {
            let rect = new Rectangle(10, 10, 'blue');
            rect.color = 'lime';
            expect(rect.color).to.equal('lime');
        });

        it("upon creating second object its values should not change the values of older instance", () => {
            let rect = new Rectangle(10, 10, 'blue');
            let rect2 = new Rectangle(3.14, 1.61, 'pink');
            expect(rect.width).to.not.equal(rect2.width);
        });
    });
});