let Article = require('./article');

class TableArticle extends Article {
    constructor(title, content) {
        super(title, content);
        this.headings = null;
        this.data = null;
    }

    loadData(headings, data) {
        this.headings = headings;
        this.data = data;
    }

    getElementString() {
        let html = '<div class="article">\n';
        html += `<div class="article-title">${this.title}</div>\n`;
        html += `<p>${this.content}</p>\n`;
        html += '<div class="table">\n<table class="data">\n<tr>';
        for (let head of this.headings) {
            html += `<th>${head}</th>`;
        }

        html += '</tr>\n';

        for (let entry of this.data) {
            html += '<tr>';

            for (let head of this.headings) {
                let property = head.toLowerCase()
                    .split(/\s+/)
                    .join('');

                html += `<td>${entry[property]}</td>`;
            }

            html += '</tr>\n';
        }


        return html + '</table>\n</div>\n</div>\n';
    }
}

module.exports = TableArticle;