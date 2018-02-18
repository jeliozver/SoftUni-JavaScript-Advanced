function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', 'true');

    incBtn.addClass('btn');
    incBtn.attr('id', 'incrementBtn');

    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    list.addClass('results');

    $(incBtn).on('click', inc);
    $(addBtn).on('click', add);

    textArea.appendTo(fragment);
    incBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);

    function inc() {
        let oldVal = textArea.val();
        textArea.val(Number(oldVal) + 1);
    }

    function add() {
        let newLi = $(`<li>${textArea.val()}</li>`);
        newLi.appendTo(list);
    }
}

window.onload = function () {
    increment('#wrapper');
};