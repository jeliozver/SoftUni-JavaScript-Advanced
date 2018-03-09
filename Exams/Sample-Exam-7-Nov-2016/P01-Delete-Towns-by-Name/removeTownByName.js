function attachEvents() {
    let selectFiled = $('#towns');
    let deleteBtn = $('#btnDelete');
    let deleteInput = $('#townName');
    let resultDiv = $('#result');

    deleteBtn.on('click', removeTown);

    function removeTown() {
        let towns = selectFiled.children();
        let townToDelete = deleteInput.val();
        let isDeleted = false;

        for (let town of towns) {
            if (town.textContent === townToDelete) {
                isDeleted = true;
                $(town).remove();
            }
        }

        let result = '';
        if (isDeleted) {
            result = `${townToDelete} deleted.`;
        } else {
            result = `${townToDelete} not found.`;
        }

        deleteInput.val('');
        resultDiv.text(result);
    }
}