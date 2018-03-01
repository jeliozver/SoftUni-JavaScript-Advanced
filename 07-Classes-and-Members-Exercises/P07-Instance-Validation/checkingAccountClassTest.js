let CheckingAccount = require('./checkingAccountClass').CheckingAccount;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test CheckingAccount", () => {
    describe("General Tests", () => {
        it("constructor should be a function", () => {
            expect(typeof CheckingAccount.constructor).to.equal('function');
        });

        it("constructor should take 4 parameters", () => {
            expect(CheckingAccount.length).to.equal(4);
        });

        it("instance of the created object should be the class constructor", () => {
            let acc = new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter', 'Morgan');
            let check = acc instanceof CheckingAccount;
            expect(check).to.be.true;
        });

        it("should have property products", () => {
            let acc = new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter', 'Morgan');
            expect(acc.hasOwnProperty('products')).to.be.true;
        });

        it("products property must be an array", () => {
            let acc = new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter', 'Morgan');
            expect(Array.isArray(acc.products)).to.be.true;
        });

        it("upon creation products array must be empty", () => {
            let acc = new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter', 'Morgan');
            expect(acc.products.length).to.equal(0);
        });
    });

    describe("TypeError tests", () => {
        describe("ID Tests", () => {
            it("should throw an error when ID has less than 6 digits", () => {
                expect(()=> new CheckingAccount('112', 'dextermorgan@gmail.com', 'Dexter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'Client ID must be a 6-digit number');
            });

            it("should throw an error when ID has more than 6 digits", () => {
                expect(()=> new CheckingAccount('1234567', 'dextermorgan@gmail.com', 'Dexter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'Client ID must be a 6-digit number');
            });

            it("should throw an error when ID has exactly 6 characters but at least one is non-digit", () => {
                expect(()=> new CheckingAccount('x23456', 'dextermorgan@gmail.com', 'Dexter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'Client ID must be a 6-digit number');
            });
        });

        describe("Email Tests", () => {
            it("should throw an error when email has no characters before the '@' character", () => {
                expect(()=> new CheckingAccount('123456', '@gmail.com', 'Dexter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'Invalid e-mail');
            });

            it("should throw an error when email has non-alphanumeric character before the '@' character", () => {
                expect(()=> new CheckingAccount('123456', 'dex_@gmail.com', 'Dexter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'Invalid e-mail');
            });

            it("should throw an error when email has no '@' character", () => {
                expect(()=> new CheckingAccount('123456', 'dextergmail.com', 'Dexter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'Invalid e-mail');
            });

            it("should throw an error when email has no characters after the '@' character", () => {
                expect(()=> new CheckingAccount('123456', 'dexter@', 'Dexter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'Invalid e-mail');
            });

            it("should throw an error when email has non-latin letter character before the '@' character", () => {
                expect(()=> new CheckingAccount('123456', 'dexter@4', 'Dexter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'Invalid e-mail');
            });
        });

        describe("First Name Tests", () => {
            it("should throw an error when first name is more less than 3 characters long", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', 'De', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'First name must be between 3 and 20 characters long');
            });

            it("should throw an error when first name is more than 20 characters long", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', 'DexterDexterDexterDex', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'First name must be between 3 and 20 characters long');
            });

            it("should throw an error when first name has non-latin letter character", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', 'D#xter', 'Morgan'))
                    .to.throw(TypeError).which.has.property('message', 'First name must contain only Latin characters');
            });
        });

        describe("Last Name Tests", () => {
            it("should throw an error when last name is more less than 3 characters long", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter', 'Mo'))
                    .to.throw(TypeError).which.has.property('message', 'Last name must be between 3 and 20 characters long');
            });

            it("should throw an error when last name is more than 20 characters long", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter', 'MorganMorganMorganMor'))
                    .to.throw(TypeError).which.has.property('message', 'Last name must be between 3 and 20 characters long');
            });

            it("should throw an error when last name has non-latin letter character", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter', 'M0rg@n'))
                    .to.throw(TypeError).which.has.property('message', 'Last name must contain only Latin characters');
            });
        });

        describe("Correct Order Tests", () => {
            it("should throw ID error", () => {
                expect(()=> new CheckingAccount('1', '@', 'D', 'M'))
                    .to.throw(TypeError).which.has.property('message', 'Client ID must be a 6-digit number');
            });

            it("should throw email error", () => {
                expect(()=> new CheckingAccount('123456', '@', 'D', 'M'))
                    .to.throw(TypeError).which.has.property('message', 'Invalid e-mail');
            });

            it("should throw first name must be between 3 and 20 characters error", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', '!', 'M'))
                    .to.throw(TypeError).which.has.property('message', 'First name must be between 3 and 20 characters long');
            });

            it("should throw first name must contain only latin letters error", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter$@', 'M'))
                    .to.throw(TypeError).which.has.property('message', 'First name must contain only Latin characters');
            });

            it("should throw first name must be between 3 and 20 characters error", () => {
                expect(()=> new CheckingAccount('123456', 'dextermorgan@gmail.com', 'Dexter', '#$'))
                    .to.throw(TypeError).which.has.property('message', 'Last name must be between 3 and 20 characters long');
            });
        });
    });
});