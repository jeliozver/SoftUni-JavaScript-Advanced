function listBuilder(selector) {
    let container = $(selector);
    let list;

    return {
        createNewList: function () {
            container.html('');
            container.append($('<ul>'));
        },
        addItem: function (text) {
            list = container.find('ul');
            let newItem = $('<li>').text(text);
            let upBtn = $('<button>').text('Up');
            let downBtn = $('<button>').text('Down');

            upBtn.on('click', function () {
                let current = $(this).parent();
                current.insertBefore(current.prev());
            });

            downBtn.on('click', function () {
                let current = $(this).parent();
                current.insertAfter(current.next());
            });

            newItem.append(upBtn);
            newItem.append(downBtn);
            list.append(newItem);
        }
    }
}

$(function () {
    let builder = listBuilder("#main");
    builder.createNewList();
    builder.addItem("Sofia");
    builder.addItem("Varna");
    builder.addItem("Sofia <new>");
    builder.addItem("Pleven");
});