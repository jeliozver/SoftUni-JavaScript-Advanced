function sum() {
    let data = document.getElementsByTagName('td');
    let sum = 0;
    for (let i = 1; i < data.length; i+= 2) {
        sum += Number(data[i].textContent);
    }

    document.getElementById('sum').textContent = sum.toString();
}