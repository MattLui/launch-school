/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/*
Input: string
Ouptut:
  - Register value (number) if the print command is given
  - Otherwise, nothing
Data Structures:
  - Stack = array
  - Register = number
  - Convert the string to an array to parse commands
  - Switch statement for each command
Algo:
  - Initialize the stack and register
  - Convert the given string to an array of commands
  - Iterate through the array of commands
  - For each command, execute the function using a switch statment
  - The default is to store the number in the register
*/
function minilang(string) {
  let stack = [];
  let register = 0;
  let arrayOfCommands = string.split(' ');
  let token;
  for (let index = 0; index < arrayOfCommands.length; index += 1) {
    token = arrayOfCommands[index];
    switch (token) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      default:
        register = Number(token);
    }
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)