import Student from "../models/studentModel.js";

const controller = {
  getAllStudents: function (req, res, next) {
    let students = Student.fetchAll();

    if (req.query.name) {
      students = students.filter((student) => student.name.includes(req.query.name));
    }
    if (req.query.sortBy) {
      const sortKey = req.query.sortBy;
      students.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));
    }

    res.status(200).json(students);
  },

  getStudentById: function (req, res, next) {
    const student = Student.findById(req.params.id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  },

  createStudent: function (req, res, next) {
    const { name, age, grade } = req.body;
    const newStudent = new Student(null, name, age, grade).save();
    res.status(201).json(newStudent);
  },

  updateStudent: function (req, res, next) {
    try {
      const updatedStudent = Student.updateById(req.params.id, req.body);
      res.status(200).json(updatedStudent);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deleteStudent: function (req, res, next) {
    try {
      Student.deleteById(req.params.id);
      res.status(200).end();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default controller;
