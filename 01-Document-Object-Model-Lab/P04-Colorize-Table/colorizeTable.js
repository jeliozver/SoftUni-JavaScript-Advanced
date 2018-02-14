function colorize() {
    let rows = document
        .getElementsByTagName('table')[0].children[0].children;
    for (let i = 1; i < rows.length; i+= 2) {
        rows[i].style.backgroundColor = 'Teal';
    }
}