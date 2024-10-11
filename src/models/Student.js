const { mongoose } = require("../config/db");

const studentSchema = { name: String, surname: String };
const students = mongoose.model("students", studentSchema);

exports.students = students;
