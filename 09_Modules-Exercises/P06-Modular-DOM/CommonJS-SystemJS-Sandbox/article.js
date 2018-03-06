let BaseElement = require('./baseElement.js');

class Article extends BaseElement {
    constructor(title, content) {
        super();
        this.title = title;
        this.content = content;
        this.timestamp = new Date();
    }

    getElementString() {
        let html = '<div class="article">\n';
        html += `<div class="article-title">${this.title}</div>\n`;
        html += `<p>${this.content}</p>\n</div>\n`;

        return html;
    }
}

module.exports = Article;