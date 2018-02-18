function wikiParser(selector) {
    let container = $(selector);
    let line = container.text();
    let headingsRegex = /(=+)(.+?)(=+)/g;
    let boldRegex = /(''')(.+?)(''')/;
    let italicRegex = /('')(.+?)('')/;
    let linkRegex = /(\[\[)([A-Za-z0-9 |]+?)(]])/g;

    while (headingsRegex.test(line)) {
        line = line.replace(headingsRegex, headingsReplacer);
    }

    while (boldRegex.test(line)) {
        line = line.replace(boldRegex, boldReplacer);
    }

    while (italicRegex.test(line)) {
        line = line.replace(italicRegex, italicReplacer);
    }

    while (linkRegex.test(line)) {
        line = line.replace(linkRegex, linkReplacer);
    }

    container.html(line);
    
    function headingsReplacer(match, gr1, gr2, gr3) {

        if (gr1.length === 1) {
            gr1 = '<h1>';
            gr3 = '</h1>';
        } else if (gr1.length === 2) {
            gr1 = '<h2>';
            gr3 = '</h2>';
        } else if (gr1.length === 3) {
            gr1 = '<h3>';
            gr3 = '</h3>';
        }

        return gr1 + gr2 + gr3;
    }

    function boldReplacer(match, gr1, gr2, gr3) {
        gr1 = '<b>';
        gr3 = '</b>';
        return gr1 + gr2 + gr3;
    }

    function italicReplacer(match, gr1, gr2, gr3) {
        gr1 = '<i>';
        gr3 = '</i>';
        return gr1 + gr2 + gr3;
    }

    function linkReplacer(match, gr1, gr2, gr3) {
        let args = gr2.split('|');
        gr1 = `<a href="/wiki/${args[0]}">`;
        gr3 = '</a>';
        if (args.length > 1) {
            gr2 = args[1];
        } else {
            gr2 = args[0];
        }

        return gr1 + gr2 + gr3;
    }
}

window.onload = function () {
    wikiParser('#wiki');
};