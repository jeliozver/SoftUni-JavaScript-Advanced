let BaseElement = require('./baseElement');

class TitleBar extends BaseElement {
    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        let link = `<a class="menu-link" href="${href}">${name}</a>|`;
        this.links.push(link);
    }

    getElementString() {
        let html = '';
        let len = this.links.length;

        if (len === 1) {
            this.links[0] = this.links[0].substring(0, this.links[0].length - 1);
        } else if (len !== 0) {
            this.links[len - 1] = this.links[len - 1].substring(0, this.links[len - 1].length - 1);
        }

        html += `<header class="header">\n<div><span class="title">${this.title}</span></div>\n<div>\n`;
        html += '<nav class="menu">\n';

        for (let link of this.links) {
            html += link + `\n`;
        }

        html += '</nav>\n</div>\n</header>\n';

        return html;
    }
}

module.exports = TitleBar;