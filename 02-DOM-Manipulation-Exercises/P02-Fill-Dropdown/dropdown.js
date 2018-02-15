function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let dropdown = document.getElementById('menu');

    let newItem = document.createElement('option');
    newItem.textContent = text.value;
    newItem.setAttribute('value', value.value);
    dropdown.appendChild(newItem);

    text.value = '';
    value.value = '';
}