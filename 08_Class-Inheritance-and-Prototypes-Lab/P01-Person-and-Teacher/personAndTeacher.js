function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

let container = personAndTeacher();
let Person = container.Person;
let Teacher = container.Teacher;
let personOne = new Person('Dexter', 'dexter@gmail.com');
let teacherOne = new Teacher('Lilly', 'lilly@hotmail.com', 'mathematics');
console.log(personOne);
console.log(teacherOne);