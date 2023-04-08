/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
function createSchool() {
  return {
    students: [],
    addStudent: function(student) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(student.year)) {
        this.students.push(student);
      } else {
        console.log('Invalid Year');
      }
    },
    enrollStudent: function(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode});
    },
    addGrade: function(student, courseName, grade) {
      let course = student.courses.find(course => course.name === courseName);
      if (course) {
        course.grade = grade;
      }
    },
    getReportCard: function(student) {
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      });
    },
    courseReport: function(course) {
      let courseGrades = [];
      this.students.forEach(student => {
        let filteredCourse = (student.courses.filter(studentCourse => studentCourse.name === course));
        if (filteredCourse.length > 0 && filteredCourse[0].grade) {
          courseGrades.push([student.name, filteredCourse[0].grade]);
        }
      });
      if (courseGrades.length > 0) {
        let totalGrades = 0;
        let numGrades = 0;
        console.log(`=${course} Grades=`);
        courseGrades.forEach(grade => {
          console.log(`${grade[0]}: ${grade[1]}`);
          totalGrades += grade[1];
          numGrades++;
        });
        console.log(`---`);
        console.log(`Course Average: ${totalGrades / numGrades}`);
      }
    },
  };
}

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },
    listCourses: function() {
      console.log(this.courses);
    },
    addCourse: function(course) {
      this.courses.push(course);
    },
    addNote: function(courseCode, note) {
      let targetCourse = this.courses.find(course => course.code === courseCode);
      if (targetCourse) {
        if (targetCourse.note) {
          targetCourse.note = targetCourse.note + '; ' + note;
        } else {
          targetCourse.note = note;
        }
      }
    },
    updateNote: function(courseCode, note) {
      let targetCourse = this.courses.find(course => course.code === courseCode);
      if (targetCourse) {
        targetCourse.note = note;
      }
    },
    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    }
  };
}

let school = createSchool();
let foo = createStudent('foo', '3rd');
school.addStudent(foo);
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

let bar = createStudent('bar', '1st');
school.addStudent(bar);
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

let qux = createStudent('qux', '2nd');
school.addStudent(qux);
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

school.getReportCard(foo);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');