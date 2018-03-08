function attachEvents() {
    let selectFiled = $('#towns');
    let addBtn = $('#btnAdd');
    let removeBtn = $('#btnDelete');
    let inputField = $('#newItem');

    addBtn.on('click', add);
    removeBtn.on('click', remove);

    function add() {
        let txt = inputField.val();
        if (txt !== '') {
            let newOption = $('<option>').text(txt);
            selectFiled.append(newOption);
        }

        inputField.val('');
    }

    function remove() {
        let elemToRemove = selectFiled.find('option:selected');
        if (elemToRemove.length > 0) {
            elemToRemove.remove();
        }
    }
}