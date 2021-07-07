class Grader {
    constructor (mark, form){
        this.mark = mark;
        this.form = form;
    }

    computeScore() {
        let score = "F"
        if (this.mark > 80) score = "A";
        return score
      }
}

class HighSchool extends Grader {
    highschoolScore() {
        if (this.mark > 80 && this.student.form === "s6") {
            score = "A"
        }
        return score
        }
}


module.exports = Grader;