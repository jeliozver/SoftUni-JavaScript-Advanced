let Point = require('./pointClass').Point;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test pointClass", () => {
    describe("General tests", () => {
        it("constructor should be a function", () => {
            expect(typeof Point.constructor).to.equal('function');
        });

        it("constructor should take 2 parameters", () => {
            expect(Point.length).to.equal(2);
        });

        it("instance of the created object should be the class constructor", () => {
            let point = new Point(10, 20);
            let check = point instanceof Point;
            expect(check).to.be.true;
        });

        it("distance should be a function", () => {
            expect(typeof Point.distance).to.equal('function');
        });
    });

    describe("Values tests", () => {
        it("x property should initialize properly", () => {
            let point = new Point(9.1, 20);
            expect(point.x).to.equal(9.1);
        });

        it("y property should initialize properly", () => {
            let point = new Point(9.1, 20);
            expect(point.y).to.equal(20);
        });

        it("distance function should calculate properly with integers", () => {
            let p1 = new Point(5, 5);
            let p2 = new Point(9, 8);
            let distance = Point.distance(p1, p2);
            expect(distance).to.equal(5);
        });

        it("distance function should calculate properly with fractions", () => {
            let p1 = new Point(3.14, 5.2);
            let p2 = new Point(1.61, 2.19);
            let distance = Point.distance(p1, p2);
            expect(distance).to.equal(3.376536687198882);
        });
    });
});