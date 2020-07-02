class Mark {
    constructor(subject, student, mark) {
        this.subject = subject;
        this.student = student;
        this.mark = mark;
    }

    isValid() {
        let valid = true;
        if (this.student === null) {
            valid = false;
        }

        if (this.mark < 0 || this.mark > 100) {
            valid = false;
        }

        return valid;
    }
}


module.exports = Mark;