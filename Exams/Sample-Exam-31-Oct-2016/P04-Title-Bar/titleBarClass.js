class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        this.links.push(`<a class="menu-link" href="${href}">${name}</a>`);
    }

    appendTo(selector) {
        let header = $('<header>').addClass('header');
        let headDiv = $('<div>').addClass('header-row');
        let drawDiv = $('<div>').addClass('drawer');
        let showHideAnchor = $('<a class="button">&#9776;</a>');
        let menuNav = $('<nav>').addClass('menu');

        showHideAnchor.on('click', function (event) {
           event.preventDefault();
           if (drawDiv.css('display') === 'none') {
               drawDiv.css('display', 'block');
           } else {
               drawDiv.css('display', 'none');
           }
        });
        for (let link of this.links) {
            menuNav.append(link);
        }

        headDiv.append(showHideAnchor);
        headDiv.append($('<span>')
            .addClass('title')
            .text(`${this.title}`));
        drawDiv.append(menuNav);
        header.append(headDiv);
        header.append(drawDiv);
        $(selector).prepend(header);
    }
}

let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#container');