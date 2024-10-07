function Student(studentId) {
  this.studentId = studentId;
  this.answers = [];
}

Student.prototype.addAnswer = function (question) {
  this.answers.push(question);
};

function Question(qid, answer) {
  this.qid = qid;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

function Quiz(questions, students) {
  this.questions = new Map();
  questions.forEach((q) => {
    this.questions.set(q.qid, q.answer);
  });
  this.students = students;
}

Quiz.prototype.scoreStudentBySid = function (sid) {
  const student = this.students.find((s) => s.studentId === sid);
  if (!student) {
    return 0;
  }

  let score = 0;
  student.answers.forEach((answer) => {
    if (this.questions.has(answer.qid) && this.questions.get(answer.qid) === answer.answer) {
      score++;
    }
  });

  return score;
};

Quiz.prototype.getAverageScore = function () {
  const totalScore = this.students.reduce((sum, student) => sum + this.scoreStudentBySid(student.studentId), 0);
  return totalScore / this.students.length;
};

// Usage Example
const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));

const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));

const students = [student1, student2];
const questions = [new Question(1, "b"), new Question(2, "a"), new Question(3, "b")];

const quiz = new Quiz(questions, students);
let scoreForStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreForStudent10); // Expected Result: 3

let scoreForStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreForStudent11); // Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); // Expected Result: 2.5
