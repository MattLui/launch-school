function myBind(func, obj) {
  return function() {
    func.apply(obj);
  };
}

function sayName() {
  console.log(this.name);
}

let obj1 = {
  name: "Odell"
};

let bound = myBind(sayName, obj1);
bound();