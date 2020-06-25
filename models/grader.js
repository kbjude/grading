class Grader {
    constructor (mark){
        this.mark = mark;
    }

    computeScore() {
        let score = "F";
        if (this.mark.mark > 80) {
            score = "A";
        }
        return score;
    }
}