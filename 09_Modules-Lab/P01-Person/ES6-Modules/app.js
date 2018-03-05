import * as Person from './person';
let newPerson = new Person('Dexter');
document.getElementById('name').innerHTML = newPerson.toString();