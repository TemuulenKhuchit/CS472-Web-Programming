class Employee {
  #fullname;
  #salary = 0;
  static #counter = 0;

  constructor(name, salary, dob) {
    this.#fullname = name;
    this.#salary = salary;
    this.dob = dob;
    Employee.#incCounter();
  }

  static #incCounter() {
    Employee.#counter++;
  }

  static getCounter() {
    return Employee.#counter;
  }

  get name() {
    return this.#fullname;
  }

  set name(str) {
    this.#fullname = str;
  }

  getSalary() {
    return this.#salary;
  }
}

let emp1 = new Employee("Anna Smith", 15000, new Date(2000, 9, 25));
let emp2 = new Employee("Tom Jerry", 9000, new Date(1997, 6, 5));
let emp3 = new Employee("John Snow", 18000, new Date(1991, 4, 5));

console.log(emp1, emp2, emp3);
emp1.name = "Lebron James";
console.log(emp1.name);
console.log(emp2.getSalary());

class Manager extends Employee {
  #bonus = 0;

  constructor(name, salary, dob, bonus) {
    super(name, salary, dob);
    this.#bonus = bonus;
  }

  getSalary() {
    return super.getSalary() + this.#bonus;
  }
}
