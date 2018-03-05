class Checkbox {
    constructor(label, selector) {
        this._label = label;
        this._selector = selector;
        this._value = !!$(selector).is(":checked");
        
        $(selector).on('change', () => {
            this.value = this._value === false;
        });
    }

    get label() {
        return this._label;
    }

    get elements() {
        return $(this._selector);
    }

    get value() {
        return this._value;
    }

    set value(value) {
        if (typeof value === 'boolean') {
            this._value = value;

            if (value){
                $(this._selector).prop('checked', true);
            } else {
                $(this._selector).prop('checked', false);
            }
        } else {
            throw new Error('Must be a boolean!');
        }
    }
}

module.exports = Checkbox;