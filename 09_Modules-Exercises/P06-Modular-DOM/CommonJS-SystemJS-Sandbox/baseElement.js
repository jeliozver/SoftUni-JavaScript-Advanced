let $ = require('./node_modules/jquery/dist/jquery.min.js');

class BaseElement {
    constructor() {
        if (new.target === BaseElement) {
            throw new Error("Cannot be instantiated!");
        }

        this.element = null;
    }

    appendTo(selector) {
        let element = this.createElement();
        $(selector).append(element);
    }

    createElement() {
        let element = this.getElementString();
        return $(element);
    }

    getElementString() {
        return this.element.toString();
    }
}

module.exports = BaseElement;