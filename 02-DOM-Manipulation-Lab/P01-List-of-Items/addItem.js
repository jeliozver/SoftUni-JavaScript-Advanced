function addItem() {
    let item = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let newLi = document.createElement('li');
    newLi.textContent = item.value;
    list.appendChild(newLi);
    item.value = '';
}