class Numberbox {
    constructor(label, selector, minValue, maxValue) {
        this._label = label;
        this._selector = selector;
        this._minValue = minValue;
        this._maxValue = maxValue;
        this._value = minValue;

        $(selector).on('change', () => {
            this.value = $(selector).val()
        });
    }

    get label() {
        return this._label
    }

    get elements() {
        return $(this._selector)
    }

    get value() {
        return this._value
    }

    set value(val){
        if (Number(val) >= this._minValue && Number(val) <= this._maxValue) {
            this._value = Number(val);
            $(this._selector).val(val);
        } else {
            throw new Error('Incorrect value!');
        }
    }
}

module.exports = Numberbox;