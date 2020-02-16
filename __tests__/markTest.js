const Student = require('../models/student');
const Mark = require('../models/mark');

test('returns A for mark greater than 80', () => {
    const student = new Student("Isaiah","S6");
    const mark = new Mark("MTC",student,90);
    expect(mark.computeScore()).toBe('A');
});

test('returns F for mark less than 80', () => {
    const student = new Student("Isaiah","S6");
    const mark = new Mark("MTC",student,40);
    expect(mark.computeScore()).toBe('F');
});

test('accepts valid mark', () => {
    const student = new Student("Isaiah","S6");
    const mark = new Mark("MTC",student,40);
    expect(mark.isValid()).toBe(true);
});

test('rejects invalid mark', () => {
    const student = new Student("Isaiah","S6");
    const mark = new Mark("MTC",student,400);
    expect(mark.isValid()).toBe(false);
});