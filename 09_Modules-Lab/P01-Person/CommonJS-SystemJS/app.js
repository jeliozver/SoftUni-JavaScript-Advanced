let Person = require('./person.js');

let newPerson = new Person('Dexter');
document.getElementById('name').innerHTML = newPerson.toString();