function domSearch(selector, isCaseSensitive) {
    let container = $(selector);

    let addDiv = $('<div>');
    let searchDiv = $('<div>');
    let resultDiv = $('<div>');

    container.addClass('items-control');
    addDiv.addClass('add-controls');
    searchDiv.addClass('search-controls');
    resultDiv.addClass('result-controls');

    let addLabel = $('<label>Enter text: </label>');
    addLabel.append($('<input id="addInput">'));
    let addLink = $('<a>');
    addLink.attr('href', '#');
    addLink.attr('id', 'add');
    addLink.addClass('button');
    addLink.css('display', 'block');
    addLink.text('Add');
    addDiv.append(addLabel);
    addDiv.append(addLink);

    let searchLabel = $('<label>Search: </label>');
    let searchInput = $('<input>');
    searchInput.attr('id', 'searchInput');
    searchInput.on('input', function () {
        let text = $(this).val();
        $('.list-item').each((i, li) => matches(li, text));
    });

    searchLabel.append(searchInput);
    searchDiv.append(searchLabel);

    let itemsList = $('<ul>');
    itemsList.addClass('items-list');
    resultDiv.append(itemsList);

    container.append(addDiv);
    container.append(searchDiv);
    container.append(resultDiv);

    $('#add').on('click', function (event) {
        event.preventDefault();
        let newLi = $('<li>');
        let remLink = $('<a>');
        remLink.attr('href', '#');
        remLink.addClass('button');
        remLink.text('X');
        remLink.on('click', function (event) {
            event.preventDefault();
            $(this).parent().remove();
        });
        let text = $('<strong>');
        text.text(`${$('#addInput').val()}`);

        newLi.addClass('list-item');
        newLi.append(remLink);
        newLi.append(text);
        $('.items-list').append(newLi);
    });

    function matches(li, text) {
        $(li).css('display', 'block');
        if(isCaseSensitive) {
            let regex = new RegExp(''+text+'', '');
            if (!regex.test($(li).find('strong').text())) {
                $(li).css('display', 'none');
            }
        } else {
            let regex = new RegExp(''+text+'', 'i');
            if (!regex.test($(li).find('strong').text())) {
                $(li).css('display', 'none');
            }
        }
    }
}

domSearch("#content",false);
