function processTickets(tickets, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (let ticketData of tickets) {
        let args = ticketData.split('|');
        let [destination, price, status] = args;

        result.push(new Ticket(destination, Number(price), status));
    }

    switch (sortCriteria) {
        case 'destination':
            result = result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result = result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result = result.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return result;
}