function repeat(func) {
  func(); //function gets invoked with the implicit context, global
  func(); //function gets invoked with the implicit context, global
}

let obj = {
  greeting: 'hello',
  greet() {
    repeat(function() {
      console.log(this.greeting);
    });
  }
};

obj.greet();