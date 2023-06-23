/* eslint-disable max-lines-per-function */
"use strict";

function makeList() {
  let items = [];
  return {

    add(item) {
      if (!items.includes(item)) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },

    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        console.log(items.join("\n"));
      }
    },

    remove(item) {
      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1);
        console.log(`${item} removed!`);
      }
    },
  };
}

let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();