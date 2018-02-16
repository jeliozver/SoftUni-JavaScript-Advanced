function initializeTable() {
    $('#createLink').on('click', addCountry);

    initCountry('Bulgaria', 'Sofia');
    initCountry('Germany', 'Berlin');
    initCountry('Russia', 'Moscow');
    hideLinks();

    function hideLinks() {
        $('tr').find('a').show();
        $('tr:last-child').find('a:contains(Down)').hide();
        $('tr:nth-child(3)').find('a:contains(Up)').hide();
    }

    function addCountry() {
        let name = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        if (name === '' || capital === '') return;
        initCountry(name, capital);
        hideLinks();
    }

    function initCountry(name, capital) {
        $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').on('click', moveUp))
                .append($('<a href="#">[Down]</a>').on('click', moveDown))
                .append($('<a href="#">[Delete]</a>').on('click', deleteCountry)))
            .appendTo($('#countriesTable'));
    }

    function moveUp() {
        let current = $(this).parent().parent();
        current.insertBefore(current.prev());
        hideLinks();
    }

    function moveDown() {
        let current = $(this).parent().parent();
        current.insertAfter(current.next());
        hideLinks();
    }

    function deleteCountry() {
        $(this).parent().parent().remove();
        hideLinks();
    }
}

// $(() => initializeTable());

// function initializeTableFading() {
//     $('#createLink').on('click', addCountry);
//
//     initCountry('Bulgaria', 'Sofia');
//     initCountry('Germany', 'Berlin');
//     initCountry('Russia', 'Moscow');
//     hideLinks();
//
//     function hideLinks() {
//         $('tr').find('a').show();
//         $('tr:last-child').find('a:contains(Down)').hide();
//         $('tr:nth-child(3)').find('a:contains(Up)').hide();
//     }
//
//     function addCountry() {
//         let name = $('#newCountryText');
//         let capital = $('#newCapitalText');
//         initCountry(name.val(), capital.val());
//         hideLinks();
//         name.val('');
//         capital.val('');
//     }
//
//     function initCountry(name, capital) {
//         let row = $('<tr>')
//             .append($(`<td>${name}</td>`))
//             .append($(`<td>${capital}</td>`))
//             .append($('<td>')
//                 .append($('<a href="#">[Up]</a>').on('click', moveUp))
//                 .append($('<a href="#">[Down]</a>').on('click', moveDown))
//                 .append($('<a href="#">[Delete]</a>').on('click', deleteCountry)));
//         row.css('display', 'none');
//         row.appendTo($('#countriesTable'));
//         row.fadeIn();
//     }
//
//     function moveUp() {
//        let current = $(this).parent().parent();
//        current.fadeOut(() => {
//            current.insertBefore(current.prev());
//            current.fadeIn();
//            hideLinks();
//        });
//     }
//
//     function moveDown() {
//         let current = $(this).parent().parent();
//         current.fadeOut(() => {
//             current.insertAfter(current.next());
//             current.fadeIn();
//             hideLinks();
//         });
//     }
//
//     function deleteCountry() {
//         $(this).parent().parent().remove();
//         hideLinks();
//     }
// }