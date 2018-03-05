class Person {
    constructor(name, age) {
        this.name = name;
        this.age = Number(age);
    }

    addToSelector(selector) {
        let container = $(selector);

        let newDiv = $('<div>').addClass(`person ${this.name}`);
        let nameParagraph = $('<p>').addClass('name').text(`${this.name}`);
        let ageParagraph = $('<p>').addClass('age').text(`${this.age}`);
        let postsDiv = $('<div>').addClass(`posts ${this.name}`);

        newDiv.append(nameParagraph);
        newDiv.append(ageParagraph);
        newDiv.append(postsDiv);
        container.append(newDiv);
    }
}

module.exports = Person;