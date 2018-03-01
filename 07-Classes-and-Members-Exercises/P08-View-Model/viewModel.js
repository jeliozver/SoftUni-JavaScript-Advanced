class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this.value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (let element of this.elements) {
            $(element).val(value);
        }
    }

    onInput() {
        this.elements.on('input', (event) => {
            this.value = $(event.target).val();
        });
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', () => {
    console.log(textbox.value);
});