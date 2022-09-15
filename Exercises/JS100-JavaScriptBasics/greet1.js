function greet(greeting) {
  if (greeting == undefined) {
    console.log('Hello, world!');
  } else {
    console.log(greeting + ', world!');
  }
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!