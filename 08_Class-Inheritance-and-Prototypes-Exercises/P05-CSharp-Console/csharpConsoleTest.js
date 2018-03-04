let Console = require('./csharpConsole').Console;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test CSharp Console", () => {
    describe("General tests", () => {
        it("constructor should be a function", () => {
            expect(typeof Console).to.equal('function');
        });
    });

    describe("Throw Errors tests", () => {
        it("if multiple arguments are passed, but the first is not a string should throw a TypeError.", () => {
           expect(() => Console.writeLine({obj: 'error'}, 'It\'s not right!')).to.throw(TypeError);
        });

        it("if parameters count does not correspond to the number of placeholders in the string should throw a RangeError", () => {
            expect(() => Console.writeLine('The {0} brown fox {1} over {2} lazy dog', 'quick', 'brown')).to.throw(RangeError);
        });

        it("if parameters count does not correspond to the number of placeholders in the string should throw a RangeError", () => {
            expect(() => Console.writeLine('The {0} brown fox jumps over the lazy {1}', 'dog')).to.throw(RangeError);
        });

        it("if the placeholders have indexes not within the parameters range should throw RangeError", () => {
            expect(() => Console.writeLine('The {0} brown fox jumps over the lazy {3}', 'quick', 'dog')).to.throw(RangeError);
        });

        it("if the placeholders have indexes not within the parameters range should throw RangeError", () => {
            expect(() => Console.writeLine('The {0} brown {22} jumps over the lazy {1}', 'quick', 'fox', 'dog')).to.throw(RangeError);
        });
    });

    describe("Correct behaviour tests", () => {
        it("if only a single parameter is passed and it is a string it should return it.", () => {
            expect(Console.writeLine('I should remain the same!')).to.equal('I should remain the same!');
        });

        it("if only a single parameter is passed and it is an object it should return the JSON representation of the object.", () => {
            expect(Console.writeLine({property: 'JSON', number: 20, array: [10, '10']}))
                .to.equal('{"property":"JSON","number":20,"array":[10,"10"]}');
        });

        it("should exchange all placeholders with the correct parameters when all values are ok", () => {
            expect(Console.writeLine('The {0} {1} {2} jumps over the lazy {3}', 'quick', 'brown', 'fox', 'dog'))
                .to.equal('The quick brown fox jumps over the lazy dog');
        });

        it("should exchange all placeholders with the correct parameters from different types", () => {
            expect(Console.writeLine('Why task {0} has a {1} when its so easy?', 5, 'star'))
                .to.equal('Why task 5 has a star when its so easy?');
        });

        it("should support more than 10 placeholders and parameters passed", () => {
            expect(Console.writeLine('{0} {1} {2} {3} {4} {5} {6} {7} {8} {9} {10}!'
                ,'This', 'task', 'is', 'so', 'annoying', 'its', 'not', 'cool', 'at', 'all', 'mate'))
                .to.equal('This task is so annoying its not cool at all mate!');
        });
    });
});