function newStack() {
  let array = [];
  return {
    push(value) {
      array.push(value);
    },
    pop() {
      return array.pop();
    },
    printStack() {
      array.forEach(element => console.log(element));
    }
  };
}

let myStack = newStack();
myStack.push("hello");
myStack.push("world");
myStack.printStack();
myStack.pop();
myStack.printStack();