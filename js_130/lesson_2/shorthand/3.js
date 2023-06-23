function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

// let { baz, qux, bar } = foo(1, 2, 3);

let foo1 = foo(1, 2, 3);
let baz = foo1.baz;
let qux = foo1.qux;
let bar = foo1.bar;

console.log(baz, qux, bar);