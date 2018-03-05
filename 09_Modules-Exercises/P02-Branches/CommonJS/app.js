let Employee = require('./employee');
let Branch  = require('./branch');

// let employee1 = new Employee("Peter Ivanov", 25, "Regular Worker");
// let employee2 = new Employee("Ivan Peterov", 24, "Regular Worker");
// let employee3 = new Employee("John Hissie", 21, "CEO");
//
// console.log(employee3.toString());
// // John Hissie, 21 (CEO)
//
// let branch1 = new Branch(1, "Four Streets Branch", "Default INC.");
// branch1.hire(employee1);
// branch1.hire(employee2);
// branch1.hire(employee3);
// console.log(branch1.toString());
// @ Default INC., Four Streets Branch, 1
// Employed:
// ** Peter Ivanov, 25 (Regular Worker)
// ** Ivan Peterov, 24 (Regular Worker)
// ** John Hissie, 21 (CEO)

result.Employee = Employee;
result.Branch = Branch;