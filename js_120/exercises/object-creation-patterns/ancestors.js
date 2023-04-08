// name property added to make objects easier to identify
let foo = {
  name: 'foo',
  ancestors() {
    let ancestorList = [];
    let object = this;
    while (object !== null) {
      let name = Object.getPrototypeOf(object).toString.call(object);
      ancestorList.push(name);
      object = Object.getPrototypeOf(object);
    }
    console.log(ancestorList);
  }
};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']