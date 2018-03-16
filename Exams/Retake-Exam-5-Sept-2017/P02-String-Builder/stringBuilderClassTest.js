let StringBuilder = require('./stringBuilderClass').StringBuilder;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test StringBuilder Class", () => {
    let sb;

    describe("General tests", () => {
        it("can be instantiated with a passed in string argument", () => {
            expect(() => sb = new StringBuilder('String')).to.not.throw(Error);
        });

        it("can be instantiated with no argument", () => {
            expect(() => sb = new StringBuilder()).to.not.throw(Error);
        });

        it("constructor should be a function", () => {
            expect(typeof StringBuilder.constructor).to.equal('function');
        });

        it("constructor should take 1 parameters", () => {
            expect(StringBuilder.length).to.equal(1);
        });

        it("instance of the created object should be the class constructor", () => {
            sb = new StringBuilder();
            let check = sb instanceof StringBuilder;
            expect(check).to.be.true;
        });

        it("the class should have property append in its prototype and it should be a function", () => {
            sb = new StringBuilder();
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.true;
            expect(typeof sb.append).to.equal('function');
        });

        it("the class should have property prepend in its prototype and it should be a function", () => {
            sb = new StringBuilder();
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.true;
            expect(typeof sb.prepend).to.equal('function');
        });

        it("the class should have property insertAt in its prototype and it should be a function", () => {
            sb = new StringBuilder();
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.true;
            expect(typeof sb.insertAt).to.equal('function');
        });

        it("the class should have property remove in its prototype and it should be a function", () => {
            sb = new StringBuilder();
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.true;
            expect(typeof sb.remove).to.equal('function');
        });

        it("the class should have property toString in its prototype and it should be a function", () => {
            sb = new StringBuilder();
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.true;
            expect(typeof sb.toString).to.equal('function');
        });
    });

    describe("Throw error tests", () => {
        it("should throw TypeError with message 'Argument must be a string' if instantiated with non-string", () => {
           expect(() => new StringBuilder(12))
               .to.throw(TypeError).which.has.property('message', 'Argument must be string');
        });

        it("append should throw TypeError with message 'Argument must be a string' if passed argument is not a string ", () => {
            sb = new StringBuilder();
            expect(() => sb.append(12))
                .to.throw(TypeError).which.has.property('message', 'Argument must be string');
        });

        it("prepend should throw TypeError with message 'Argument must be a string' if passed argument is not a string ", () => {
            sb = new StringBuilder();
            expect(() => sb.prepend(12))
                .to.throw(TypeError).which.has.property('message', 'Argument must be string');
        });

        it("insertAt should throw TypeError with message 'Argument must be a string' if passed argument is not a string ", () => {
            sb = new StringBuilder();
            expect(() => sb.insertAt(12, 0))
                .to.throw(TypeError).which.has.property('message', 'Argument must be string');
        });
    });

    describe("Proper behaviour tests", () => {
        it("append should add passed in string to the end of the storage", () => {
            sb = new StringBuilder('Dexter');
            sb.append(' Morgan!');
            expect(sb.toString()).to.equal('Dexter Morgan!');
        });

        it("prepend should add passed in string to the beginning of the storage", () => {
            sb = new StringBuilder('Dexter Morgan!');
            sb.prepend('Hello... ');
            expect(sb.toString()).to.equal('Hello... Dexter Morgan!');
        });

        it("insertAt should insert the given string at the given index", () => {
            sb = new StringBuilder('Hello Morgan!');
            sb.insertAt('... Dexter', 5);
            expect(sb.toString()).to.equal('Hello... Dexter Morgan!');
        });

        it("should remove elements from the storage, starting at the given index (inclusive), length number of characters", () => {
            sb = new StringBuilder('Hello... Dexter Morgan!');
            sb.remove(0, 9);
            expect(sb.toString()).to.equal('Dexter Morgan!');
        });

        it("toString should return a string", () => {
            sb = new StringBuilder('12');
            expect(typeof sb.toString()).to.equal('string');
        });

        it("combining all functions should return a string with all elements joined by an empty string", () => {
            sb = new StringBuilder('ello');
            sb.append(' word!');
            sb.prepend('H');
            sb.insertAt(' Unit Test', 5);
            sb.remove(11, 5);
            expect(sb.toString()).to.equal('Hello Unit word!');
        });
    });
});