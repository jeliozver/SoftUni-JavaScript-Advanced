let lookupChar = require('./lookupChar').lookupChar;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test lookupChar", () => {
    describe("General tests", () => {
        it("should be a function", () => {
            expect(typeof lookupChar).to.equal('function');
        });

        it("should return string with correct values", () => {
            expect(typeof lookupChar('chai', 1)).to.equal('string');
        });

        it("should return string with length of 1 with correct values", () => {
            expect(lookupChar('chai', 1).length).to.equal(1);
        });
    });

    describe("Invalid input tests", () => {
        it("should return undefined when the first parameter is not a string", () => {
            expect(lookupChar(['unitTesting!'], 1)).to.equal(undefined);
        });

        it("should return undefined when the second parameter is not a number", () => {
            expect(lookupChar('unitTesting!', {char: 1})).to.equal(undefined);
        });

        it("should return undefined when the second parameter is not an integer number", () => {
            expect(lookupChar('unitTesting!', 3.1415)).to.equal(undefined);
        });

        it("should return 'Incorrect index' when the index is negative number", () => {
            expect(lookupChar('unitTesting!', -1)).to.equal('Incorrect index');
        });

        it("should return 'Incorrect index' when the index is > string length", () => {
            expect(lookupChar('unitTesting!', 20)).to.equal('Incorrect index');
        });

        it("should return 'Incorrect index' when the index is = string length", () => {
            expect(lookupChar('unitTesting!', 12)).to.equal('Incorrect index');
        });

    });

    describe("Valid input tests", () => {
        it("should return 'u' when the parameters are correct - First index", () => {
            expect(lookupChar('unitTesting!', 0)).to.equal('u');
        });

        it("should return 'g' when the parameters are correct - Mid index", () => {
            expect(lookupChar('TestingTheTest', 6)).to.equal('g');
        });

        it("should return '!' when the parameters are correct - Last index", () => {
            expect(lookupChar('unitTesting!', 11)).to.equal('!');
        });
    });
});