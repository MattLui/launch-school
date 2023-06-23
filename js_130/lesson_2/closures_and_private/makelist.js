"use strict";

function makeList() {
  let list = [];
  return (item) => {
    if (item === undefined) {
      if (list.length === 0) {
        console.log("The list is empty.");
      } else {
        console.log(list.join("\n"));
      }
    } else if (!list.includes(item)) {
      list.push(item);
      console.log(`${item} added!`);
    } else if (list.includes(item)) {
      list.splice(list.indexOf(item), 1);
      console.log(`${item} removed!`);
    }
  };
}

let list = makeList();
list();

list("make breakfast");

list("read book");

list();

list("make breakfast");

list();