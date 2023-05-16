let obj = {
  name: "obj",
  foo() {
    let display = () => {
      console.log(this.name);
    };

    display(this); //execution context is the global object
  }
};

obj.foo();