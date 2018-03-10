class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._element = this.create();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if (this.online === true) {
            this._element.find('.title').addClass('online');
        } else {
            this._element.find('.title').removeClass('online');
        }
    }

    create() {
        let newContact = $('<article>');
        let titleDiv = $('<div>')
            .addClass('title')
            .text(`${this.firstName} ${this.lastName}`);
        let infoBtn = $('<button>&#8505;</button>');
        let infoDiv = $('<div>').addClass('info').hide();
        infoDiv.append($(`<span>&phone; ${this.phone}</span>`));
        infoDiv.append($(`<span>&#9993; ${this.email}</span>`));

        infoBtn.on('click', function () {
            if (infoDiv.css('display') === 'none') {
                infoDiv.show();
            } else {
                infoDiv.hide();
            }
        });

        titleDiv.append(infoBtn);
        newContact.append(titleDiv);
        newContact.append(infoDiv);

        return newContact;
    }

    render(id) {
        let container = $(`#${id}`);
        container.append(this._element);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(c => c.render('main'));

setTimeout(() => contacts[0].online = true, 2000);
setTimeout(() => contacts[1].online = true, 3000);
setTimeout(() => contacts[2].online = true, 4000);

setTimeout(() => contacts[0].online = false, 5000);
setTimeout(() => contacts[1].online = false, 6000);
setTimeout(() => contacts[2].online = false, 7000);