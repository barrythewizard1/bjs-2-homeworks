function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
      this.marks.push(...marks);
    }
  };
  
  Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
      return 0;
    }
  
    const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
    return sum / this.marks.length;
  };
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };
  let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Алгебра");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Алгебра"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Геометрия");
student2.exclude('плохая учёба');
console.log(student2);
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
  
