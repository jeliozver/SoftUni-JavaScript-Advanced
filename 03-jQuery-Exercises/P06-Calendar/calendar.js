function calendar([day, month, year]) {
    let curMonthDays = lastMonthDays(Number(month) + 1, Number(year));

    let curMonthFirst = new Date(year, month - 1, 1);
    let curMonthLast = new Date(year, month - 1, curMonthDays);

    let curMonthStart = curMonthFirst.getDay();
    let curMonthEnd = curMonthLast.getDay();

    if (curMonthStart === 0) curMonthStart = 7;
    if (curMonthEnd === 0) curMonthEnd = 7;

    let prevMonthEmpty = curMonthStart - 1;
    let nextMonthEmpty = 7 - curMonthEnd;

    let curDay = 1;

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let container = $('#content');
    let table = $('<table>');
    $(`<caption>${monthNames[month - 1]} ${year}</caption>`).appendTo(table);
    let body = $('<tbody>');
    let headRow = $('<tr>');
    $('<th>Mon</th>').appendTo(headRow);
    $('<th>Tue</th>').appendTo(headRow);
    $('<th>Wed</th>').appendTo(headRow);
    $('<th>Thu</th>').appendTo(headRow);
    $('<th>Fri</th>').appendTo(headRow);
    $('<th>Sat</th>').appendTo(headRow);
    $('<th>Sun</th>').appendTo(headRow);
    headRow.appendTo(body);

    if (curMonthStart !== 1) {
        let row = $('<tr>');

        for (let i = 1; i <= 7; i++) {
            if (prevMonthEmpty > 0) {
                $('<td>').appendTo(row);
                prevMonthEmpty--;
            } else {
                if (curDay === Number(day)) {
                    $(`<td class="today">${curDay}</td>`).appendTo(row);
                    curDay++;
                } else {
                    $(`<td>${curDay}</td>`).appendTo(row);
                    curDay++;
                }
            }
        }

        row.appendTo(body);
    } else {
        let row = $('<tr>');

        for (let i = 1; i <= 7; i++) {
            if (curDay === Number(day)) {
                $(`<td class="today">${curDay}</td>`).appendTo(row);
                curDay++;
            } else {
                $(`<td>${curDay}</td>`).appendTo(row);
                curDay++;
            }
        }

        row.appendTo(body);
    }

    while (curDay <= curMonthDays || nextMonthEmpty > 0) {
        let row = $('<tr>');

        for (let i = 1; i <= 7; i++) {
            if (curDay <= curMonthDays) {
                if (curDay === Number(day)) {
                    $(`<td class="today">${curDay}</td>`).appendTo(row);
                    curDay++;
                } else {
                    $(`<td>${curDay}</td>`).appendTo(row);
                    curDay++;
                }
            } else {
                $('<td>').appendTo(row);
                nextMonthEmpty--;
            }
        }

        row.appendTo(body);
    }

    table.append(body);
    container.append(table);

    function lastMonthDays(month, year) {
        month--;
        if (month === 0) {
            month = 12;
        }

        let thirtyDays = [4, 6, 9, 11];
        let thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
        let isLeapYear = (year % 4 === 0 && year % 100 !== 0)
            || year % 400 === 0;

        if (thirtyDays.includes(month)) {
            return 30;
        } else if (thirtyOneDays.includes(month)) {
            return 31;
        } else {
            if (isLeapYear) {
                return 29;
            } else {
                return 28;
            }
        }
    }
}

window.onload = function () {
    calendar([29, 2, 2016]);
};