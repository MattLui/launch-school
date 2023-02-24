/* eslint-disable indent */
/*
Input: inventory item and list of transactions
Output: true or false
Rules:
  Return true only if the sum of the quantity values of
    the item's transactions is greater than zero
  A movement value of 'out' will decrease the item's quantity
  Use the transactionsFor function from the previous exercise

Example:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

Data:
  Input: number, array
  Output: boolean

Algo:
- Use transactionsFor to create an array with the transactions of the given id
- Create a 'quantity' variable and set it to zero
- For each element of that array
  - If movement is 'in', increase 'quantity' by the given quantity
  - Otherwie decrease 'quantity'
- Return 'true' if 'quantity' is greater than zero, otherwise return 'false'

*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItem, listOfTransactions) {
  let result = [];
  listOfTransactions.forEach(element => {
    if (element.id === inventoryItem) {
      result.push(element);
    }
  });
  return result;
}

function isItemAvailable(inventoryItem, listOfTransactions) {
  let tempArray = transactionsFor(inventoryItem, listOfTransactions);
  let quantity = 0;
  tempArray.forEach(element => {
    if (element.movement === 'in') {
      quantity += element.quantity;
    } else {
      quantity -= element.quantity;
    }
  });
  return quantity > 0;
}

console.log(
isItemAvailable(101, transactions),     // false
isItemAvailable(103, transactions),     // false
isItemAvailable(105, transactions));     // true