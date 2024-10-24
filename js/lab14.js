// Question 1.
// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };
// function describePerson(person: Person): string {
//   const { name, age, isStudent } = person;
//   const studentStatus = isStudent ? "a student" : "not a student";
//   return `${name} is ${age} years old and is ${studentStatus}.`;
// }
// const person: Person = { name: "John", age: 25, isStudent: true };
// console.log(describePerson(person));
// Question 2.
// import { Calculator } from "./lab14-calculator";
// const calculator = new Calculator();
// const a = 10;
// const b = 5;
// console.log(`Add: ${calculator.add(a, b)}`);
// console.log(`Subtract: ${calculator.subtract(a, b)}`);
// console.log(`Multiply: ${calculator.multiply(a, b)}`);
// console.log(`Divide: ${calculator.divide(a, b)}`);
// Question 3.
var Student = /** @class */ (function () {
    function Student(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }
    Student.prototype.addAnswer = function (question) {
        this.answers.push(question);
    };
    return Student;
}());
var Question = /** @class */ (function () {
    function Question(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }
    Question.prototype.checkAnswer = function (answer) {
        return this.answer === answer;
    };
    return Question;
}());
var Quiz = /** @class */ (function () {
    function Quiz(questions, students) {
        var _this = this;
        this.questions = new Map();
        questions.forEach(function (q) {
            _this.questions.set(q.qid, q.answer);
        });
        this.students = students;
    }
    Quiz.prototype.scoreStudentBySid = function (sid) {
        var _this = this;
        var student = this.students.find(function (s) { return s.studentId === sid; });
        if (!student) {
            return 0;
        }
        var score = 0;
        student.answers.forEach(function (answer) {
            if (_this.questions.has(answer.qid) && _this.questions.get(answer.qid) === answer.answer) {
                score++;
            }
        });
        return score;
    };
    Quiz.prototype.getAverageScore = function () {
        var _this = this;
        var totalScore = this.students.reduce(function (sum, student) { return sum + _this.scoreStudentBySid(student.studentId); }, 0);
        return totalScore / this.students.length;
    };
    return Quiz;
}());
// Usage Example
var student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));
var student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));
var students = [student1, student2];
var questions = [new Question(1, "b"), new Question(2, "a"), new Question(3, "b")];
var quiz = new Quiz(questions, students);
var scoreForStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreForStudent10); // Expected Result: 3
var scoreForStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreForStudent11); // Expected Result: 2
var average = quiz.getAverageScore();
console.log(average); // Expected Result: 2.5
