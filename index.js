const Student = require('./models/student');
const Mark = require('./models/mark');
const Grader = require('./models/grader');

const student = new Student("Isaiah","S6");
const mark = new Mark("MTC",student,90);
const grader = new Grader(mark);
console.log(`${student.name} scored ${grader.computeScore()}`);