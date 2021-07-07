class CommonStudentScore {
    studentMark = "F";
    studentGrade = undefined
  
    constructor(studentGrade) {
      this.studentGrade = studentGrade
      this.grade()
    }
  
    grade() {
      if (this.studentGrade >= 80) this.studentMark = "A"
    }
  
    getMark() {
      return this.studentMark
    }
  }
  
  class ElementaryStudentScore extends CommonStudentScore {
    grade() {
      if (this.studentGrade >= 80) this.studentMark = "B"
    }
  }
  
  class HighSchoolStudentScore extends CommonStudentScore {
    grade() {
      if (this.studentGrade >= 80) this.studentMark = "C"
    }
  }

  const student1 = new ElementaryStudentScore(80)
console.log(student1.getMark())

const student2 = new HighSchoolStudentScore(80)
console.log(student2.getMark())