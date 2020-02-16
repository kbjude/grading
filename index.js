const Student = require('./models/student');
const Mark = require('./models/mark');

const student = new Student("Isaiah","S6");
const mark = new Mark("MTC",student,90);

console.log(`${student.name} scored ${mark.computeScore()}`);