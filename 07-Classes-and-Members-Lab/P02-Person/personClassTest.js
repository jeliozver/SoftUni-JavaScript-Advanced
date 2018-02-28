let Person = require('./personClass').Person;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test personClass", () => {
    describe("General tests", () => {
        it("constructor should be a function", () => {
            expect(typeof Person.constructor).to.equal('function');
        });

        it("constructor should take 4 parameters", () => {
            expect(Person.length).to.equal(4);
        });

        it("instance of the created object should be the class constructor", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            let check = person instanceof Person;
            expect(check).to.be.true;
        });

        it("toString should be a function", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            expect(typeof person.toString).to.equal('function');
        });

        it("toString should return string", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            expect(typeof person.toString()).to.equal('string');
        });
    });

    describe("Values tests", () => {
        it("firstName property should work properly", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            expect(person.firstName).to.equal('John');
        });

        it("lastName property should work properly", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            expect(person.lastName).to.equal('Doe');
        });

        it("age property should work properly", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            expect(person.age).to.equal(22);
        });

        it("email property should work properly", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            expect(person.email).to.equal('johnDoe@gmail.com');
        });

        it("toString function should return a string in proper format", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            let toStringCheck = person.toString();
            expect(toStringCheck).to.equal('John Doe (age: 22, email: johnDoe@gmail.com)');
        });

        it("setting new values to the properties after initialization should work properly", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            person.firstName = 'Jim';
            person.lastName = 'Raynor';
            person.age = 37;
            person.email = 'killZergs@blizzard.com';
            let toStringCheck = person.toString();
            expect(toStringCheck).to.equal('Jim Raynor (age: 37, email: killZergs@blizzard.com)');
        });

        it("creating another instance should not alter the values of previous one", () => {
            let person = new Person('John', 'Doe', 22, 'johnDoe@gmail.com');
            let person2 = new Person('Dexter', 'Morgan', 35, 'dexterMorgan@hotmail.com');
            expect(person.toString()).to.not.equal(person2.toString());
        });
    });
});