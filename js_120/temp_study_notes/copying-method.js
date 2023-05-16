let obj = {
  name: "obj",
  foo() {
    console.log(this.name);
  }
};

obj.foo();

let bar = obj.foo;

let baz = bar.bind(obj);
baz();