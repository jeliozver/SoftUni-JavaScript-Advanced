function bugReportModule() {
    let id = 0;
    let container;
    return {
        report: function (author, description, reproducible, severity) {
            let newReport = $('<div>')
                .addClass('report')
                .attr('id', `report_${id}`);

            let body = $('<div>')
                .addClass('body')
                .append($('<p>').text(`${description}`));

            let title = $('<div>')
                .addClass('title')
                .append($('<span>').addClass('author').text(`${author}`))
                .append($('<span>').addClass('status').text(`Open | ${severity}`));

            newReport.append(body);
            newReport.append(title);
            container.append(newReport);

            id++;
        },
        setStatus: function (id, newStatus) {
            let statusRef = $(`#report_${id}`).find('.status');
            let oldText = statusRef.text();
            let args = oldText.split(' | ');
            let newText = `${newStatus}` + ' | ' + args[1];
            statusRef.text(newText);
        },
        remove: function (id) {
            $(`#report_${id}`).remove();
        },
        sort: function (method) {
            switch (method) {
                case 'author':
                    return sortByAuthor();
                case 'severity':
                    return sortBySeverity();
                case 'ID':
                    return sortById();
            }
        },
        output: function (selector) {
            container = $(selector);
        }
    };

    function sortByAuthor() {
        let authorsSorted = container
            .children('div')
            .find('div')
            .find('span.author');

        authorsSorted.sort(function (a, b) {
            return a.textContent.localeCompare(b.textContent);
        });

        let bugs = container.children();
        container.html('');
        authorsSorted.each(function (index, element) {
            bugs.each(function (i, e) {
                let author = $(e).find('div').find('span.author').text();
                if (author === element.textContent) {
                    container.append(e);
                }
            });
        });
    }

    function sortBySeverity() {
        let severitySorted = container
            .children('div')
            .find('div')
            .find('span.status');

        severitySorted.sort(function (a, b) {
            let c = Number(a.textContent.split(' | ')[1]);
            let d = Number(b.textContent.split(' | ')[1]);
            return c - d;
        });

        let bugs = container.children();
        container.html('');
        severitySorted.each(function (index, element) {
            bugs.each(function (i, e) {
                let author = $(e).find('div').find('span.status').text();
                if (author === element.textContent) {
                    container.append(e);
                }
            });
        });
    }

    function sortById() {
        let idSorted = container.children().sort(function (a, b) {
            let c = Number($(a)[0].attributes[1].textContent.split('report_').filter(e => e !== '')[0]);
            let d = Number($(b)[0].attributes[1].textContent.split('report_').filter(e => e !== '')[0]);
            return c - d;
        });
        container.html('');
        idSorted.each(function (index, element) {
            container.append(element);
        });
    }
}

let tracker = bugReportModule();

tracker.output('#content');
tracker.report('guy', 'report content', true, 5);
tracker.report('second guy', 'report content 2', true, 3);
tracker.report('abv', 'report content three', true, 4);
tracker.sort('author');
tracker.sort('severity');
tracker.sort('ID');