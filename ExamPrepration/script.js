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

3. outer FEC creation:
  outer: global, this: undefined
  LE[{ d: undefined }], tdz { c }

4. outer FEC execution:
  outer: global, this: undefined
  LE[{ d: 7, c: 5, inner: fn }], tdz{ }

5. inner FEC creation:
  outer: outer, this: undefined
  LE[{ }], tdz { c }, closure(outer):{d:7}

6. inner FEC execution:
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

// const result = employees
//   .filter((e) => e.teams.includes("engineering"))
//   .reduce((acc, e) => {
//     acc[e.department] = (acc[e.department] || 0) + e.salary;
//     return acc;
//   }, {});
// console.log(result);

/*
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = username === "user" && password === "password";
      if (isValid) {
        resolve({ token: "12345", message: "Login successful!" });
      } else {
        reject({ error: "Invalid credentials", statusCode: 401 });
      }
    }, 1000);
  });
}

function fetchUserProfile(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "12345") {
        resolve({ name: "John Doe", email: "john@example.com" });
      } else {
        reject({ error: "Invalid token", statusCode: 403 });
      }
    }, 1000);
  });
}

loginUser("user", "password")
  .then((res) => {
    console.log(res.message);
    return fetchUserProfile(res.token);
  })
  .then((profile) => console.log(`Profile Name - ${profile.name}, Email - ${profile.email}`))
  .catch((err) => console.error(`Error: ${err.error} (Status Code: ${err.statusCode})`));

(async () => {
  try {
    let res = await loginUser("user", "password");
    console.log(res.message);
    let profile = await fetchUserProfile(res.token);
    console.log(`Profile Name - ${profile.name}, Email - ${profile.email}`);
  } catch (err) {
    console.error(`Error: ${err.error} (Status Code: ${err.statusCode})`);
  }
})();
*/

/*
function registerUser(username, email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && email) {
        resolve({ id: "user123", message: "Registration successful!" });
      } else {
        reject({ error: "Missing username or email", statusCode: 400 });
      }
    }, 1000);
  });
}

function sendWelcomeEmail(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ message: "Welcome email sent to user!" });
      } else {
        reject({ error: "User ID not provided", statusCode: 500 });
      }
    }, 1000);
  });
}

registerUser("johnDoe", "john@example.com")
  .then((res) => {
    console.log(res.message);
    return sendWelcomeEmail(res.id);
  })
  .then((res) => console.log(res.message))
  .catch((err) => console.error(`Error: ${err.error} (Status Code: ${err.statusCode})`))
  .finally(() => console.log("Operation complete."));

(async () => {
  try {
    let res = await registerUser("johnDoe", "john@example.com");
    console.log(res.message);
    res = await sendWelcomeEmail(res.id);
    console.log(res.message);
  } catch (err) {
    console.error(`Error: ${err.error} (Status Code: ${err.statusCode})`);
  } finally {
    console.log("Operation complete.");
  }
})();
*/

/*
function registerUser(username, email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && email) {
        resolve({ userId: "user123", message: "User registered successfully!" });
      } else {
        reject({ error: "Missing username or email", statusCode: 400 });
      }
    }, 1000);
  });
}

function createUserProfile(userId, bio) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId && bio) {
        resolve({ profileId: "profile456", message: "Profile created successfully!" });
      } else {
        reject({ error: "Missing userId or bio", statusCode: 400 });
      }
    }, 1000);
  });
}

function sendConfirmationEmail(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ message: "Confirmation email sent successfully!" });
      } else {
        reject({ error: "User ID not found", statusCode: 500 });
      }
    }, 1000);
  });
}

registerUser("johnDoe", "john@example.com")
  .then((res) => {
    const userId = res.userId;
    console.log(res.message);

    return Promise.all([createUserProfile(userId, "This is my bio"), sendConfirmationEmail(userId)]);
  })
  .then((results) => {
    const [profileRes, emailRes] = results;
    console.log(profileRes.message);
    console.log(emailRes.message);
  })
  .catch((err) => {
    console.error(`Error: ${err.error} (Status Code: ${err.statusCode})`);
  })
  .finally(() => {
    console.log("All operations complete.");
  });

(async () => {
  try {
    let res = await registerUser("johnDoe", "john@example.com");
    const userId = res.userId;
    console.log(res.message);
    let results = [await createUserProfile(userId, "This is my bio"), await sendConfirmationEmail(userId)];
    const [profileRes, emailRes] = results;
    console.log(profileRes.message);
    console.log(emailRes.message);
  } catch (err) {
    console.error(`Error: ${err.error} (Status Code: ${err.statusCode})`);
  } finally {
    console.log("All operations complete.");
  }
})();
*/

/*
1. Global EC Creation:
  outer: null, this: window
  LE[{Employee: fn}], tdz{person, Manager, manager}

2. Global EC Execution:
  outer: null, this: window
  LE[{Employee: fn, person: Obj, Manager: fn, manager: Obj}], tdz{}

3. new Manager FEC Creation:
  outer: global, this: {}
  LE[{f: "Anna Smith", s: 95000, b: 500}], tdz{}

4. new Manager FEC Execution:
  outer: global, this: {}
  LE[{f: "Anna Smith", s: 95000, b: 500}, tdz{}

5. super FEC Creation:
  outer: global, this: {}
  LE[{f: "Anna Smith", s: 95000}], tdz{}

6. super FEC Execution:
  outer: global, this: {}
  LE[{f: "Anna Smith", s: 95000}], tdz{}

7. toString FEC Creation:
  outer: global, this: manager
  LE[{}], tdz{}

8. toString FEC Execution:
  outer: global, this: manager
  LE[{}], tdz{}
*/

let person = {
  toString: function () {
    return this.fullname;
  },
};
function Employee(f, s) {
  this.fullname = f;
  this.salary = s;
}
Object.setPrototypeOf(Employee.prototype, person);
class Manager extends Employee {
  constructor(f, s, b) {
    super(f, s);
    this.bonus = b;
  }
}
let manager = new Manager("Anna Smith", 95000, 500);
// console.log(manager.toString());

function Vehicle(make, model, year, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

Vehicle.prototype.drive = function (distance) {
  this.mileage += distance;
};

Vehicle.prototype.toString = function () {
  return `${this.year} ${this.make} ${this.model} (${this.mileage} miles)`;
};

Object.setPrototypeOf(Car, Vehicle);
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

function Car(make, model, year, mileage, numDoors, speed, topSpeed) {
  Vehicle.call(this, make, model, year, mileage);
  this.numDoors = numDoors;
  this.speed = speed;
  this.topSpeed = topSpeed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 10;
};

Car.prototype.toString = function () {
  return Vehicle.prototype.toString.call(this) + ` ${this.numDoors} ${this.topSpeed}`;
};

let c1 = new Car("Toyoto", "Accord", 2023, 9000, 4, 0, 115);
c1.drive(500);
c1.accelerate();
console.log(c1.toString());
c1.brake();
console.log(c1.toString());

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};
group.showList();
