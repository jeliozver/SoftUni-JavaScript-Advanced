function attachEvents() {
    let items = $('#items');
    let towns = $('#showTownsButton');

    items.on('click', 'li', onClick);
    towns.on('click', showTowns);

    function onClick() {
        if ($(this).attr('data-selected')) {
            $(this).removeAttr('data-selected');
            $(this).css('background', '');
        } else {
            $(this).attr('data-selected', 'true');
            $(this).css('background', '#DDD');
        }
    }

    function showTowns() {
        let result = [];
        items.find('li[data-selected="true"]').each((i, e) => result.push(e.textContent));
        $('#selectedTowns').text(`Selected towns: ${result.join(', ')}`);
    }
}

$(() => attachEvents());