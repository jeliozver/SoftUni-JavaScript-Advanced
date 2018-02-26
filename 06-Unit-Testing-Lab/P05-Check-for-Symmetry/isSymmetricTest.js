let isSymmetric = require('./isSymmetric').isSymmetric;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test isSymmetric", () => {
    describe("General tests", () => [
        it("should be a function", () => {
            expect(typeof isSymmetric).to.equal('function');
        }),

        it("should be false if argument is not an array", () => {
            expect(isSymmetric({})).to.be.false;
        })
    ]);

    describe("Value tests", () => [
        it("should return true for [1, 2, 3, 3, 2, 1]", () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        }),

        it("should return false for [1, 2, 3, 3, 2, 5]", () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 5])).to.be.false;
        }),

        it("should return true for [1, 2, 3, 2, 1]", () => {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        }),

        it("should return false for [1, 2, 3, 2, 5]", () => {
            expect(isSymmetric([1, 2, 3, 2, 5])).to.be.false;
        }),

        it("should return true for [1]", () => {
            expect(isSymmetric([1])).to.be.true;
        }),

        it("should return false for [1, 2]", () => {
            expect(isSymmetric([1, 2])).to.be.false;
        }),

        it("should return true for [5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5]", () => {
            expect(isSymmetric([5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5])).to.be.true;
        }),

        it("should return false for [5, 'hi', {b:5}, new Date(), {a:5}, 'hi', 5]", () => {
            expect(isSymmetric([5, 'hi', {b:5}, new Date(), {a:5}, 'hi', 5])).to.be.false;
        })
    ]);
});