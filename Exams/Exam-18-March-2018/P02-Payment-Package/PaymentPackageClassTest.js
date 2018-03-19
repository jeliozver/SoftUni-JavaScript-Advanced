let PaymentPackage = require('./PaymentPackageClass').PaymentPackage;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test PaymentPackage", () => {
    describe("General tests", () => {
        it("constructor should be a function", () => {
            expect(typeof PaymentPackage.constructor).to.equal('function');
        });

        it("constructor should take 2 parameters", () => {
            expect(PaymentPackage.length).to.equal(2);
        });

        it("can be instantiated with two parameters a string name and number value", () => {
            expect(() => new PaymentPackage('Test', 300)).to.not.throw(Error);
        });

        it("instance of the created object should be the class constructor", () => {
            let pp = new PaymentPackage('Test', 300);
            let check = pp instanceof PaymentPackage;
            expect(check).to.be.true;
        });

        it("the class should have property name in its prototype and it should be a string", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(PaymentPackage.prototype.hasOwnProperty('name')).to.be.true;
            expect(typeof pp.name).to.equal('string');
        });

        it("the class should have property value in its prototype and it should be a number", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(PaymentPackage.prototype.hasOwnProperty('value')).to.be.true;
            expect(typeof pp.value).to.equal('number');
        });

        it("the class should have property VAT in its prototype and it should be 20 by default", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.be.true;
            expect(typeof pp.VAT).to.equal('number');
            expect(pp.VAT).to.equal(20);
        });

        it("the class should have property active in its prototype and it should be true by default", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(PaymentPackage.prototype.hasOwnProperty('active')).to.be.true;
            expect(typeof pp.active).to.equal('boolean');
            expect(pp.active).to.be.true;
        });

        it("the class should have property toString in its prototype and it should be a function", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.be.true;
            expect(typeof pp.toString).to.equal('function');
        });
    });

    describe("Throw error tests", () => {
        it("should throw an Error when instantiated with empty string as name", () => {
            expect(() => new PaymentPackage('', 232)).to.throw(Error);
        });

        it("should throw an Error when instantiated with non-string as name", () => {
            expect(() => new PaymentPackage([], 232)).to.throw(Error);
        });

        it("should throw an Error when try to set new name with empty string", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.name = '').to.throw(Error);
        });

        it("should throw an Error when try to set new name with non-string", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.name = {}).to.throw(Error);
        });

        it("should throw an Error when instantiated with negative number for value", () => {
            expect(() => new PaymentPackage('Test', -232)).to.throw(Error);
        });

        it("should not throw an Error when instantiated with 0", () => {
            expect(() => new PaymentPackage('Test', 0)).to.not.throw(Error);
        });

        it("should throw an Error when instantiated with NaN as value", () => {
            expect(() => new PaymentPackage('Test', [2323])).to.throw(Error);
        });

        it("should throw an Error when try to set new value with a negative number", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.value = -30).to.throw(Error);
        });

        it("should not throw an Error when try to set new value to 0", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.value = 0).to.not.throw(Error);
        });

        it("should throw an Error when try to set new name with NaN", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.value = {}).to.throw(Error);
        });

        it("should throw an Error when try to set new VAT with a negative number", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.VAT = -300).to.throw(Error);
        });

        it("should not throw an Error when set new VAT to 0", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.VAT = 0).to.not.throw(Error);
        });

        it("should throw an Error when try to set new VAT with NaN", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.VAT = []).to.throw(Error);
        });

        it("should throw an Error when try to set new status with non boolean", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(() => pp.active = 'true').to.throw(Error);
        });
    });

    describe("toString tests", () => {
        it("toString should return a string", () => {
            let pp = new PaymentPackage('Test', 300);
            expect(typeof pp.toString()).to.equal('string');
        });

        it("toString should return an overview of the instance", () => {
            let pp = new PaymentPackage('HR Services', 1500);
            expect(pp.toString()).to.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });

        it("should append label '(inactive)' to the printed name if active property is set to false", () => {
            let pp = new PaymentPackage('HR Services', 1500);
            pp.active = false;
            expect(pp.toString()).to.equal('Package: HR Services (inactive)\n- ' +
                'Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });

        it("calculations should work properly with fractions", () => {
            let pp = new PaymentPackage('HR Services', 22.32);
            pp.VAT = 32.23;
            expect(pp.toString()).to.equal('Package: HR Services\n- ' +
                'Value (excl. VAT): 22.32\n- Value (VAT 32.23%): 29.513736');
        });

        it("Combining setting new VAT and active status should work properly", () => {
            let pp = new PaymentPackage('Dell Test', 22.32);
            pp.VAT = 32.23;
            pp.active = false;
            expect(pp.toString()).to.equal('Package: Dell Test (inactive)\n- ' +
                'Value (excl. VAT): 22.32\n- Value (VAT 32.23%): 29.513736');
        });
    });
});