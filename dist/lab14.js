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
import { Calculator } from "./lab14-calculator";
const calculator = new Calculator();
const a = 10;
const b = 5;
console.log(`Add: ${calculator.add(a, b)}`);
console.log(`Subtract: ${calculator.subtract(a, b)}`);
console.log(`Multiply: ${calculator.multiply(a, b)}`);
console.log(`Divide: ${calculator.divide(a, b)}`);
// Question 3.
// class Student {
//   studentId: number;
//   answers: Question[];
//   constructor(studentId: number) {
//     this.studentId = studentId;
//     this.answers = [];
//   }
//   addAnswer(question: Question): void {
//     this.answers.push(question);
//   }
// }
// class Question {
//   qid: number;
//   answer: string;
//   constructor(qid: number, answer: string) {
//     this.qid = qid;
//     this.answer = answer;
//   }
//   checkAnswer(answer: string): boolean {
//     return this.answer === answer;
//   }
// }
// class Quiz {
//   questions: Map<number, string>;
//   students: Student[];
//   constructor(questions: Question[], students: Student[]) {
//     this.questions = new Map();
//     questions.forEach((q) => {
//       this.questions.set(q.qid, q.answer);
//     });
//     this.students = students;
//   }
//   scoreStudentBySid(sid: number): number {
//     const student = this.students.find((s) => s.studentId === sid);
//     if (!student) {
//       return 0;
//     }
//     let score = 0;
//     student.answers.forEach((answer) => {
//       if (this.questions.has(answer.qid) && this.questions.get(answer.qid) === answer.answer) {
//         score++;
//       }
//     });
//     return score;
//   }
//   getAverageScore(): number {
//     const totalScore = this.students.reduce((sum, student) => sum + this.scoreStudentBySid(student.studentId), 0);
//     return totalScore / this.students.length;
//   }
// }
// // Usage Example
// const student1 = new Student(10);
// student1.addAnswer(new Question(2, "a"));
// student1.addAnswer(new Question(3, "b"));
// student1.addAnswer(new Question(1, "b"));
// const student2 = new Student(11);
// student2.addAnswer(new Question(3, "b"));
// student2.addAnswer(new Question(2, "a"));
// student2.addAnswer(new Question(1, "d"));
// const students = [student1, student2];
// const questions = [new Question(1, "b"), new Question(2, "a"), new Question(3, "b")];
// const quiz = new Quiz(questions, students);
// const scoreForStudent10 = quiz.scoreStudentBySid(10);
// console.log(scoreForStudent10); // Expected Result: 3
// const scoreForStudent11 = quiz.scoreStudentBySid(11);
// console.log(scoreForStudent11); // Expected Result: 2
// const average = quiz.getAverageScore();
// console.log(average); // Expected Result: 2.5
