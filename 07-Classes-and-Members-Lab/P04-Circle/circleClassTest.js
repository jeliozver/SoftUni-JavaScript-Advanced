let Circle = require('./circleClass').Circle;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test circleClass", () => {
    describe("General tests", () => {
        it("constructor should be a function", () => {
           expect(typeof Circle.constructor).to.equal('function');
        });

        it("constructor should take 1 parameter", () => {
            expect(Circle.length).to.equal(1);
        });

        it("instance of the created object should be the class constructor", () => {
            let circle = new Circle(10);
            let check = circle instanceof Circle;
            expect(check).to.be.true;
        });
    });

    describe("Values tests", () => {
        it("radius should be set to the passed value", () => {
            let circle = new Circle(3.1415);
            expect(circle.radius).to.equal(3.1415);
        });

        it("should properly calculate diameter when initialized", () => {
           let circle = new Circle(7);
           expect(circle.diameter).to.equal(14);
        });

        it("should properly calculate area when initialized", () => {
            let circle = new Circle(7.45);
            expect(circle.area).to.equal(174.3662462558675);
        });

        it("should change the radius property when new diameter is set", () => {
            let circle = new Circle(18);
            circle.diameter = 20;
            expect(circle.radius).to.equal(10);
        });

        it("should change the area property when new diameter is set", () => {
            let circle = new Circle(18);
            circle.diameter = 5;
            expect(circle.area).to.equal(19.634954084936208);
        });
    });
});