let isOddOrEven = require('./isOddOrEven').isOddOrEven;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test isOddOrEven", () => {
    describe("General tests", () => {
        it("should be a function", () => {
            expect(typeof isOddOrEven).to.equal('function');
        });

        it("should return string", () => {
            expect(typeof isOddOrEven('21')).to.equal('string');
        });
    });

    describe("Values tests", () => {
        it("should return undefined when called with a number as parameter", () => {
           expect(isOddOrEven(10)).to.equal(undefined);
        });

        it("should return undefined when called with an array as parameter", () => {
            expect(isOddOrEven(['even?'])).to.equal(undefined);
        });

        it("should return undefined when called with an object as parameter", () => {
            expect(isOddOrEven({string: 'string'})).to.equal(undefined);
        });

        it("should return 'even' when string length is an even number", () => {
           expect(isOddOrEven('ye')).to.equal('even');
        });

        it("should return 'odd' when string length is an odd number", () => {
            expect(isOddOrEven('n')).to.equal('odd');
        });

        it("should work correctly with longer strings", () => {
            expect(isOddOrEven('Yes I\'m an even string!!')).to.equal('even');
        });

        it("should work correctly with longer strings", () => {
            expect(isOddOrEven('No I\'m not an even string! I\'m so odd!!')).to.equal('odd');
        });
    });
});