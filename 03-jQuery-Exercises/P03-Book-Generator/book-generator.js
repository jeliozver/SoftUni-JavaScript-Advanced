let createBook;
// Submit to judge from line 2 ("create =") to line 41
createBook = (function bookGenerator() {

    let id = 1;
    return (selector, title, author, isbn) => {
        let container = $(selector);
        let newBook = $('<div>');
        let bookTitle = $(`<p>${title}</p>`);
        let bookAuthor = $(`<p>${author}</p>`);
        let bookIsbn = $(`<p>${isbn}</p>`);
        let selectBtn = $('<button>Select</button>');
        let deselectBtn = $('<button>Deselect</button>');

        newBook.attr('id', `book${id}`);
        newBook.css('border', 'none');

        bookTitle.addClass('title');
        bookAuthor.addClass('author');
        bookIsbn.addClass('isbn');

        selectBtn.on('click', select);
        deselectBtn.on('click', deselect);

        bookTitle.appendTo(newBook);
        bookAuthor.appendTo(newBook);
        bookIsbn.appendTo(newBook);
        selectBtn.appendTo(newBook);
        deselectBtn.appendTo(newBook);
        container.append(newBook);
        id++;

        function select() {
            newBook.css('border', '2px solid blue');
        }

        function deselect() {
            newBook.css('border', 'none');
        }
    }
}());

window.onload = function () {
    createBook("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);
    createBook("#wrapper", "Harry Potter: Chamber of Secrets", "J. K. Rowling", 123232);
};