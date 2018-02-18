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

    let html = `<table>\r\n<caption>${monthNames[month - 1]} ${year}</caption>\r\n<tbody>\r\n`;
    html += '<tr>' +
        '<th>Mon</th>' +
        '<th>Tue</th>' +
        '<th>Wed</th>' +
        '<th>Thu</th>' +
        '<th>Fri</th>' +
        '<th>Sat</th>' +
        '<th>Sun</th>' +
        '</tr>\r\n';

    if (curMonthStart !== 1) {
        html += '<tr>';

        for (let i = 1; i <= 7; i++) {
            if (prevMonthEmpty > 0) {
                html += `<td></td>`;
                prevMonthEmpty--;
            } else {
                if (curDay === Number(day)) {
                    html += `<td class="today">${curDay}</td>`;
                    curDay++;
                } else {
                    html += `<td>${curDay}</td>`;
                    curDay++;
                }
            }
        }

        html += '</tr>\r\n';
    } else {
        html += '<tr>';

        for (let i = 1; i <= 7; i++) {
            if (curDay === Number(day)) {
                html += `<td class="today">${curDay}</td>`;
                curDay++;
            } else {
                html += `<td>${curDay}</td>`;
                curDay++;
            }
        }

        html += '</tr>\r\n';
    }

    while (curDay <= curMonthDays || nextMonthEmpty > 0) {
        html += '<tr>';

        for (let i = 1; i <= 7; i++) {
            if (curDay <= curMonthDays) {
                if (curDay === Number(day)) {
                    html += `<td class="today">${curDay}</td>`;
                    curDay++;
                } else {
                    html += `<td>${curDay}</td>`;
                    curDay++;
                }
            } else {
                html += `<td></td>`;
                nextMonthEmpty--;
            }
        }

        html += '</tr>\r\n';
    }

    html += '</tbody>\r\n</table>';
    document.getElementById('content').innerHTML = html;

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

window.onload = function(){
    calendar([29,2,2016]);
};