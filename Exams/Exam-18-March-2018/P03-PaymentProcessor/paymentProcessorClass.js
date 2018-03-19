class PaymentProcessor {
    constructor(options) {
        this._options = {
            types: ['service', 'product', 'other'],
            precision: 2
        };

        if (options.types !== undefined) {
            this._options.types = options.types;
        }
        if (options.precision !== undefined) {
            this._options.precision = options.precision;
        }

        this._payments = new Map();
    }

    registerPayment(id, name, type, value) {
        if (id === '') {
            throw new Error('Missing ID!');
        }
        if (name === '') {
            throw new Error('Missing name!');
        }
        if (!this._options.types.includes(type)) {
            throw new Error('Invalid Type!');
        }
        if (isNaN(Number(value))) {
            throw new Error('Value is not a number!');
        }
        if (this._payments.has(id)) {
            throw new Error('Id already exists!');
        }

        this._payments.set(id, {
            name: name,
            type: type,
            value: value
        });
    }

    deletePayment(id) {
        this._isIdExist(id);
        this._payments.delete(id);
    }

    get(id) {
        this._isIdExist(id);

        let payment = this._payments.get(id);
        let result = `Details about payment ID: ${id}\n`;
        result += `- Name: ${payment.name}\n`;
        result += `- Type: ${payment.type}\n`;
        result += `- Value: ${payment.value.toFixed(this._options.precision)}`;
        return result;
    }

    setOptions(options) {
        if (options.types !== undefined) {
            this._options.types = options.types;
        }
        if (options.precision !== undefined) {
            this._options.precision = options.precision;
        }
    }

    toString() {
        let balance = 0;
        let payments = [...this._payments];
        for (let payment of payments) {
            balance += payment[1].value;
        }

        let result = 'Summary:\n';
        result += `Payments: ${this._payments.size}\n`;
        result += `Balance: ${balance.toFixed(this._options.precision)}`;
        
        return result;
    }

    _isIdExist(id) {
        if (!this._payments.has(id)) {
            throw new Error('ID not found!');
        }
    }
}