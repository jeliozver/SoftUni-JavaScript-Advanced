function tableBuilder(selector) {
    let container = $(selector);
    return {
        createTable: function (columnNames) {
            container.html('');
            let newTable = $('<table>');
            let newRow = $('<tr>');

            for (let col of columnNames) {
                let newHeader = $('<th>').text(`${col}`);
                newRow.append(newHeader);
            }

            newRow.append($('<th>').text('Action'));
            newTable.append(newRow);
            container.append(newTable);
        },
        fillData: function (dataRows) {
            for (let row of dataRows) {
                let newRow = $('<tr>');

                for (let col of row) {
                    let newData = $('<td>').text(`${col}`);
                    newRow.append(newData);
                }

                let table = container.find('table');
                newRow.append($('<td>')
                    .append($('<button>').text('Delete').on('click', remove)));
                table.append(newRow);
            }

            function remove() {
                $(this)
                    .parent()
                    .parent()
                    .remove();
            }
        }
    };
}

$(function () {
    let builder = tableBuilder("#main");
    builder.createTable(['Name', 'Town']);
    builder.fillData([
        ['Maria', 'Sofia'],
        ['Kiril', 'Varna'],
        ['Ani <new>', 'Ruse'],
    ]);
});