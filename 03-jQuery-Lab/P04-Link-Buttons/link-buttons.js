function attachEvents() {
    $('a.button').on('click', clicked);

    function clicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}