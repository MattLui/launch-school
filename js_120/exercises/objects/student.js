/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
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

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"