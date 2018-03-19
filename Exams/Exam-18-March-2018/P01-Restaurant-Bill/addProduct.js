function addProduct() {
    let products = $('#product-list');
    let inputs = $('#add-product').find('input');
    let totalPrice = $('#bill').find('tfoot').find('tr').find('td:last-child');
    let product = $(inputs[0]).val();
    let price = $(inputs[1]).val();

    if (product !== '' && price !== '') {
        let oldPrice = totalPrice.text();
        let newRow = $('<tr>');
        newRow.append($('<td>').text(product));
        newRow.append($('<td>').text(price));
        products.append(newRow);
        totalPrice.text(Number(price) + Number(oldPrice));
        $(inputs[0]).val('');
        $(inputs[1]).val('');
    }
}