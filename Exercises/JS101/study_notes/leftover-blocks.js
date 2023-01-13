/* eslint-disable max-len */
/*
Problem

  Input
  - Integer for number of blocks

  Output
  - Integer for number of blocks left after building the tallest possible structure

  Explicit Rules
  - The top of the structure must be a single block
  - Each block is supported by four blocks below it
  - Each block can support more than one block above it
  - There can be no gaps between blocks

  Implicit Rules
  - The structure looks like a pyramid
  - We can build the pyramid one layer at a time starting from the top
  - The top layer has 1 block, the next layer has 4 blocks, the next has 9 blocks
  - Number of blocks in each layer is that layer's number squared

  Questions
  - Can a layer have excess blocks (more than are needed to support the blocks above it?)

Examples

  console.log(calculateLeftoverBlocks(0) === 0); //true
  console.log(calculateLeftoverBlocks(1) === 0); //true
  console.log(calculateLeftoverBlocks(2) === 1); //true
  console.log(calculateLeftoverBlocks(4) === 3); //true
  console.log(calculateLeftoverBlocks(5) === 0); //true
  console.log(calculateLeftoverBlocks(6) === 1); //true
  console.log(calculateLeftoverBlocks(14) === 0); //true

  - Zero blocks can be leftover
  - Excess blocks cannot be used in a layer, the structure is always a pyramid

Data Structures

  - No specific ones needed

Algorithm

  1. Start with:
      - A count of number of blocks remaining, equal to the input
      - The current level of the structure, starting at 0
  2. Calculate the next layer by adding 1 to the current layer
  3. Calculate the number of blocks needed by the next layer by multiplying the layer number by itself
  4. Determine if there are enough blocks remaining to build the layer
    - If yes, subtract the number of blocks remaining by the number of blocks required,
      then go back to step 2.
    - If no, then return the number of blocks remaining
*/

function calculateLeftoverBlocks(num) {
  let blocksRemaining = num;
  let currentLevel = 0;
  while (true) {
    currentLevel += 1;
    if (blocksRemaining >= currentLevel * currentLevel) {
      blocksRemaining -= currentLevel * currentLevel;
    } else {
      return blocksRemaining;
    }
  }
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true