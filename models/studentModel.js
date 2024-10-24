let students = [];

class Student {
  constructor(id, name, age, grade) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  save() {
    this.id = Math.random().toString(36).substring(2, 9);
    students.push(this);
    return this;
  }

  static fetchAll() {
    return students;
  }

  static findById(studentId) {
    return students.find((student) => student.id === studentId);
  }

  static updateById(studentId, updatedData) {
    const index = students.findIndex((student) => student.id === studentId);
    if (index > -1) {
      students[index] = { ...students[index], ...updatedData };
      return students[index];
    }
    throw new Error("Student not found");
  }

  static deleteById(studentId) {
    const index = students.findIndex((student) => student.id === studentId);
    if (index > -1) {
      students.splice(index, 1);
      return;
    }
    throw new Error("Student not found");
  }
}

export default Student;
