"use strict";

function bind (object, func) {
  return function() {
    func.call(object);
  };
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }