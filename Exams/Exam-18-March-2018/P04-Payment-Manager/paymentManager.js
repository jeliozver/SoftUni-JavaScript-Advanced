class PaymentManager {
    constructor(title) {
        this.title = title;
        this._table = this._create();
    }

    render(target) {
        $(`#${target}`).append(this._table);
    }

    _create() {
        let table = $('<table>');
        table.append($('<caption>').text(`${this.title} Payment Manager`));
        let thead = $('<thead>');
        thead.append($('<tr>')
            .append($('<th>').addClass('name').text('Name'))
            .append($('<th>').addClass('category').text('Category'))
            .append($('<th>').addClass('price').text('Price'))
            .append($('<th>').text('Actions'))
        );
        let tbody = $('<tbody>').addClass('payments');
        let tfoot = $('<tfoot>').addClass('input-data');
        let tfootRow = $('<tr>');
        let nameInput = $('<td><input name="name" type="text"></td>');
        let catInput = $('<td><input name="category" type="text"></td>');
        let priceInput = $('<td><input name="price" type="number"></td>');
        let addBtn = $('<td><button>Add</button></td>').on('click', () => {
            let name = $(table.find('input')[0]);
            let cat = $(table.find('input')[1]);
            let price = $(table.find('input')[2]);
            if (name.val() !== '' && cat.val() !== '' && price.val() !== '') {
                let tbodyRow = $('<tr>');
                tbodyRow.append($('<td>').text(`${name.val()}`));
                tbodyRow.append($('<td>').text(`${cat.val()}`));
                let pr = Number(price.val());
                tbodyRow.append($('<td>').text(`${pr}`));
                tbodyRow.append($('<td><button>Delete</button></td>>').on('click', () => {
                    tbodyRow.remove();
                }));

                tbody.append(tbodyRow);
                name.val('');
                cat.val('');
                price.val('');
            }
        });

        tfootRow.append(nameInput);
        tfootRow.append(catInput);
        tfootRow.append(priceInput);
        tfootRow.append(addBtn);
        tfoot.append(tfootRow);

        table.append(thead);
        table.append(tbody);
        table.append(tfoot);
        
        return table;
    }
}

$(function () {
    let paymentMangersData = [
        ['amazon', 'Amazon'],
        ['ebay', 'eBay'],
        ['walmart', 'Walmart'],
    ];

    for (let [target, title] of paymentMangersData) {
        let paymentManager = new PaymentManager(title);
        paymentManager.render(target);
    }
});