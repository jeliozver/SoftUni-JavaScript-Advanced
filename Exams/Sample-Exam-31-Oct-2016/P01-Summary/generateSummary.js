function generateSummary(selector) {
    let content = $('#content');
    let container = content.parent();
    let highlighted = content
        .find('p')
        .find('strong');

    let summaryBtn = $(selector);
    summaryBtn.on('click', extractHighlighted);

    function extractHighlighted() {
        let newDiv = $('<div>').attr('id', 'summary');
        newDiv.append($('<h2>').text('Summary'));
        let newParagraph = $('<p>');

        highlighted.each((index, element) => {
           let oldText = newParagraph.text();
           newParagraph.text(oldText + element.textContent);
        });

        newDiv.append(newParagraph);
        container.append(newDiv);
    }
}

window.onload = function () {
    generateSummary(`#generate`);
};