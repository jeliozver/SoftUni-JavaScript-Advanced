function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let base = super.toString()
                .substring(0, super.toString().length - 1);
            base += `, subject: ${this.subject})`;
            return base;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let base = super.toString()
                .substring(0, super.toString().length - 1);
            base += `, course: ${this.course})`;
            return base;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let container = toStringExtension();
let Person = container.Person;
let Teacher = container.Teacher;
let Student = container.Student;

let personOne = new Person('Dexter', 'dexter@gmail.com');
let teacherOne = new Teacher('Lilly', 'lilly@hotmail.com', 'CSharp');
let studentOne = new Student('James', 'james@yahoo.com', 'JavaScript');

console.log(personOne.toString());
console.log(teacherOne.toString());
console.log(studentOne.toString());