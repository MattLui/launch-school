/* eslint-disable max-lines-per-function */
"use strict";

function makeList() {
  return {
    items: [],

    add(item) {
      if (!this.items.includes(item)) {
        this.items.push(item);
        console.log(`${item} added!`);
      }
    },

    list() {
      if (this.items.length === 0) {
        console.log("The list is empty.");
      } else {
        console.log(this.items.join("\n"));
      }
    },

    remove(item) {
      if (this.items.includes(item)) {
        this.items.splice(this.items.indexOf(item), 1);
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