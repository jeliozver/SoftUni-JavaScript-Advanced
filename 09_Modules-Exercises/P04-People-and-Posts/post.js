class Post {
    constructor(title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
    }

    addToSelector(selector) {
        let container = $(selector);

        let newDiv = $('<div>').addClass(`post ${this.author}`);
        let heading = $('<h3>').addClass('title').text(`${this.title}`);
        let bodyParagraph = $('<p>').addClass(`body`).text(`${this.body}`);
        let authorParagraph = $('<p>').addClass(`author`).text(`${this.author}`);

        newDiv.append(heading);
        newDiv.append(bodyParagraph);
        newDiv.append(authorParagraph);
        container.append(newDiv);
    }
}

module.exports = Post;