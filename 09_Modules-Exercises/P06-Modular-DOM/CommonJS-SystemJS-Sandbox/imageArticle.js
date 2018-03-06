let Article = require('./article.js');

class ImageArticle extends Article {
    constructor(title, content, image) {
        super(title, content);
        this.image = image;
    }

    getElementString() {
        let html = '<div class="article">\n';
        html += `<div class="article-title">${this.title}</div>\n`;
        html += `<div class="image"><img src="${this.image}"></div>\n`;
        html += `<p>${this.content}</p>\n</div>\n`;

        return html;
    }
}

module.exports = ImageArticle;