function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Human.prototype.walk = function() {
  console.log("walking");
};

Human.prototype.introduce = function() {
  console.log(`Hello I am ${this.firstName} ${this.lastName}`);
};

function Student(firstName, lastName) {
  Human.call(this, firstName, lastName);
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log("studying");
};

let bob = new Student("bob", "doe");
bob.study();
bob.walk();
bob.introduce();
console.log(bob.constructor === Student); //true