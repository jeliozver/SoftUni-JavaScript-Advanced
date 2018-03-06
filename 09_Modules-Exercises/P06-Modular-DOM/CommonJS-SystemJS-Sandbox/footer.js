let BaseElement = require('./baseElement.js');

class Footer extends BaseElement {
    constructor(message) {
        super();
        this.message = message;
    }

    getElementString() {
        return `<footer>Copyright &copy; ${this.message}</footer>\n`;
    }
}

module.exports = Footer;