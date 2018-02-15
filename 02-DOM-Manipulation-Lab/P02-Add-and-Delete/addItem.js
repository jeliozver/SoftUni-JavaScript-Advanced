function addItem() {
    let newItem = document.getElementById('newText');
    let list = document.getElementById('items');
    let newLi = document.createElement('li');
    let deleteLink = document.createElement('a');

    newLi.textContent = newItem.value + ' ';
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    deleteLink.addEventListener('click', deleteItem);

    newLi.appendChild(deleteLink);
    list.appendChild(newLi);

    newItem.value = '';

    function deleteItem() {
        list.removeChild(newLi);
    }
}