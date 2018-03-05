define(['./person'], function (person) {
   let Person = person.Person;
   let newPerson = new Person('Dexter');
   document.getElementById('name').innerHTML = newPerson.toString();
});