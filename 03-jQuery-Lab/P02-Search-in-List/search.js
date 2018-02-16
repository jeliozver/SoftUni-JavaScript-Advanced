function search() {
    let substring = $('#searchText').val();
    let matches = $('#towns').find(`li:contains(${substring})`);
    if (matches.length > 0) {
        matches.css('font-weight', 'bold');
    } else {
        $('#towns').find(`li`).css('font-weight', 'normal');
    }

    $('#result').text(`${matches.length} matches found.`);
}