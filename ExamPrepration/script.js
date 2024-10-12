const numbers = [1, 5, 18, 2, 77, 108];
// numbers.filter((n) => n % 2 == 1).forEach((n) => console.log(n));

function sum(arr) {
  return arr.filter((n) => n >= 20).reduce((a, b) => a + b, 0);
}
// console.log(sum([10, 20, 50, 30, 8]));

const getNewArray = function (arr) {
  return arr.filter((n) => n.length >= 5 && n.includes("a"));
};
// console.log(getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"]));

/*
1. Global EC creation:
  outer: null, this: Window
  LE[{ a: undefined, outer: fn }], tdz{ b }

2. Global EC execution:
  outer: null, this: Window
  LE[{ a: 2, outer: fn, b: 3 }], tdz{ }

3. outer EC creation:
  outer: global, this: undefined
  LE[{ d: undefined }], tdz { c }

4. outer EC execution:
  outer: global, this: undefined
  LE[{ d: 7, c: 5, inner: fn }], tdz{ }

5. inner EC creation:
  outer: outer, this: undefined
  LE[{ }], tdz { c }, closure(outer):{d:7}

6. inner EC execution:
  outer: outer, this: undefined
  LE[{ c: 9 }], tdz{ }, closure(outer):{d:7}

  
*/
let arr = [10, 20, 30, 40, 50];

// arr.splice(2, 0, 25);
// console.log(arr);

// arr.filter((n) => n % 15 == 0).forEach((n) => console.log(n));

// console.log(arr.map((n) => n * n));

// console.log(arr.reduce((a, b) => a + b, 0));

// console.log(arr.find((n) => n > 40));

const students = [
  { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },
  { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },
  { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },
  { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },
  { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
];

// const result = students
//   .filter((s) => s.courses.includes("cs303"))
//   .reduce((acc, s) => {
//     let avg = s.grades.reduce((sum, grade) => sum + grade, 0) / s.grades.length;
//     acc[s.name] = avg;
//     return acc;
//   }, {});
// console.log(result);

const employees = [
  { name: "Alice", salary: 90000, department: "IT", teams: ["engineering", "devOps"] },
  { name: "Bob", salary: 70000, department: "IT", teams: ["support"] },
  { name: "Charlie", salary: 120000, department: "Engineering", teams: ["engineering", "devOps"] },
  { name: "Dave", salary: 180000, department: "Engineering", teams: ["engineering"] },
  { name: "Eve", salary: 95000, department: "HR", teams: ["recruitment"] },
];

const result = employees
  .filter((e) => e.teams.includes("engineering"))
  .reduce((acc, e) => {
    acc[e.department] = (acc[e.department] || 0) + e.salary;
    return acc;
  }, {});
console.log(result);
