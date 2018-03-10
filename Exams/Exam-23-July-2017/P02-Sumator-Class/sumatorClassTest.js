let Sumator = require('./sumatorClass').Sumator;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test Sumator class", () => {
    let sumator;
    beforeEach(() => {
       sumator = new Sumator();
    });

    describe("General tests", () => {
        it("constructor should be a function", () => {
            expect(typeof Sumator.constructor).to.equal('function');
        });

        it("constructor should take 0 parameters", () => {
            expect(Sumator.length).to.equal(0);
        });

        it("instance of the created object should be the class constructor", () => {
            let check = sumator instanceof Sumator;
            expect(check).to.be.true;
        });

        it("should have property data", () => {
            expect(sumator.hasOwnProperty('data')).to.be.true;
        });

        it("data property should be an array", () => {
            expect(Array.isArray(sumator.data)).to.be.true;
        });

        it("data array should be empty after creation", () => {
            expect(sumator.data.toString()).to.equal('');
        });

        it("the class should have property add in its prototype and it should be a function", () => {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
            expect(typeof sumator.add).to.equal('function');
        });

        it("the class should have property sumNums in its prototype and it should be a function", () => {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
            expect(typeof sumator.sumNums).to.equal('function');
        });

        it("the class should have property removeByFilter in its prototype and it should be a function", () => {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
            expect(typeof sumator.removeByFilter).to.equal('function');
        });

        it("the class should have property toString in its prototype and it should be a function", () => {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
            expect(typeof sumator.toString).to.equal('function');
        });
    });

    describe("add tests", () => {
        it("should add multiple elements to the list", () => {
            sumator.add(20);
            sumator.add(59);
            sumator.add(77);
            sumator.add(3.14);
            expect(sumator.data.length).to.equal(4);
            expect(sumator.toString()).to.equal('20, 59, 77, 3.14');
        });

        it("should add elements of any type to the list", () => {
            sumator.add(88);
            sumator.add('String');
            sumator.add(['Array', 20]);
            sumator.add({obj:'Object'});
            sumator.add(undefined);
            sumator.add(null);
            sumator.add(NaN);
            sumator.add(() => 'Function');
            sumator.add(true);

            expect(sumator.data.length).to.equal(9);
            expect(sumator.toString()).to.equal("88, String, Array,20, " +
                "[object Object], , , NaN, () => 'Function', true");
        });
    });

    describe("sumNums tests", () => {
        it("should return zero if no numbers are stored", () => {
            sumator.add('String');
            sumator.add(['Array', 20]);
            sumator.add({obj:'Object'});
            sumator.add(undefined);
            sumator.add(null);
            sumator.add(() => 'Function');
            sumator.add(true);

            expect(sumator.sumNums()).to.equal(0);
        });

        it("should sum properly if only numbers are stored", () => {
            sumator.add(123);
            sumator.add(88);
            sumator.add(3.14);
            sumator.add(1.61);
            sumator.add(0);
            expect(sumator.sumNums()).to.equal(215.75);
        });

        it("should sum properly only the proper numbers if list also contains NaN's", () => {
            sumator.add(88);
            sumator.add(3.1415);
            sumator.add('Fibonacci');
            sumator.add('1.61');
            sumator.add(undefined);
            sumator.add(null);
            expect(sumator.sumNums()).to.equal(91.1415);
        });
    });

    describe("removeByFilter tests", () => {
        it("should remove all items that match the given criteria", () => {
            sumator.add(88);
            sumator.add(3.1415);
            sumator.add(2);
            sumator.add(4);
            sumator.add(6);
            sumator.add(9);
            sumator.add(11);
            sumator.add('11');
            sumator.add([2,  2]);
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.data.length).to.equal(5);
            expect(sumator.toString()).to.equal('3.1415, 9, 11, 11, 2,2');
        });

        it("should work with different functions", () => {
            sumator.add('232');
            sumator.add(true);
            sumator.add(undefined);
            sumator.add(null);
            sumator.removeByFilter(x => typeof x !== 'number');
            expect(sumator.data.length).to.equal(0);
            expect(sumator.toString()).to.equal('(empty)');
        });

        it("should work with different functions", () => {
            sumator.add(20);
            sumator.add('Walter White');
            sumator.add('Breaking Bad');
            sumator.removeByFilter(x => x + 3 === 23);
            expect(sumator.data.length).to.equal(2);
            expect(sumator.toString()).to.equal('Walter White, Breaking Bad');
        });
    });

    describe("toString function tests", () => {
        it("should return a string", () => {
            expect(typeof sumator.toString()).to.equal('string');
        });

        it("when data array is empty should return '(empty)'", () => {
            expect(sumator.toString()).to.equal('(empty)');
        });

        it("when data array has only one element it should return it without extra characters", () => {
            sumator.add(20);
            expect(sumator.toString()).to.equal('20');
        });

        it("when data array has more than one element should return all items, joined with ', '", () => {
            sumator.add(20);
            sumator.add([1, 3, 4]);
            sumator.add('11');
            sumator.add({hey:'you'});
            expect(sumator.toString()).to.equal('20, 1,3,4, 11, [object Object]');
        });
    });
});