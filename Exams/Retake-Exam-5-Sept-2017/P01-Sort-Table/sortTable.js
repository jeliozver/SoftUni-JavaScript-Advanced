function sort(colIndex, descending) {
    let tableBody = $('#products').find('tbody');
    let dataRows = tableBody.find('tr');

    dataRows.sort((a, b) => {
        if (colIndex === 0) {
            if (descending) {
                return $(b).find('td:first-child').text().localeCompare($(a).find('td:first-child').text());
            } else {
                return $(a).find('td:first-child').text().localeCompare($(b).find('td:first-child').text());
            }
        } else {
            if (descending) {
                return Number($(b).find('td:last-child').text()) - Number($(a).find('td:last-child').text());
            } else {
                return Number($(a).find('td:last-child').text()) - Number($(b).find('td:last-child').text());
            }
        }
    });

    tableBody.html('');
    dataRows.each((index, element) => {
        tableBody.append(element);
    });
}