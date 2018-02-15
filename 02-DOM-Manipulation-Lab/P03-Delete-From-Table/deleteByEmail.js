function deleteByEmail() {
    let email = document.getElementsByName('email')[0];
    let emails = document.querySelectorAll("#customers tr td:last-child");
    let isFound = false;
    for (let em of emails) {
        if (em.textContent === email.value) {
            let row = em.parentNode;
            row.parentNode.removeChild(row);
            isFound = true;
            break;
        }
    }

    if (isFound) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}