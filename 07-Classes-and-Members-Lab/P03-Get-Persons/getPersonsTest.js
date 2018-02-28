let getPersons = require('./getPersons').getPersons;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test getPersons", () => {
    describe("General tests", () => {
        it("constructor should be a function", () => {
            expect(typeof getPersons).to.equal('function');
        });

        it("should return an array", () => {
            let array = getPersons();
            expect(Array.isArray(array)).to.be.true;
        });

        it("should return an array with length 4", () => {
            let array = getPersons();
            expect(array.length).to.equal(4);
        });

        it("should return an array with objects", () => {
            let array = getPersons();
            let isObjects = true;
            for (let obj of array) {
                if (typeof obj !== 'object') {
                    isObjects = false;
                    break;
                }
            }
            expect(isObjects).to.be.true;
        });

        it("should return an array with objects instances of Person class", () => {
            let array = getPersons();
            let isObjects = true;
            for (let obj of array) {
                if (obj.constructor.name !== 'Person') {
                    isObjects = false;
                    break;
                }
            }

            expect(isObjects).to.be.true;
        });

    });

    describe("Values tests", () => {
        it("first object firstName property should equal 'Maria'", () => {
            let array = getPersons();
            expect(array[0].firstName).to.equal('Maria');
        });

        it("second object age property should be undefined", () => {
            let array = getPersons();
            expect(array[1].age).to.equal(undefined);
        });

        it("third object lastName property should equal 'Nikolov'", () => {
            let array = getPersons();
            expect(array[2].lastName).to.equal('Nikolov');
        });

        it("fourth object email property should equal 'ptr@gmail.com'", () => {
            let array = getPersons();
            expect(array[3].email).to.equal('ptr@gmail.com');
        });

        it("toString function should return the object in proper format", () => {
            let array = getPersons();
            let result = array.join(', ');
            let correctValue = 'Maria Petrova (age: 22, email: mp@yahoo.com), ' +
                'SoftUni undefined (age: undefined, email: undefined), ' +
                'Stephan Nikolov (age: 25, email: undefined), ' +
                'Peter Kolev (age: 24, email: ptr@gmail.com)';
            expect(result).to.equal(correctValue);
        });
    });
});