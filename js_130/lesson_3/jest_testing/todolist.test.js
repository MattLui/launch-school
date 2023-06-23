/* eslint-disable max-lines-per-function */
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first returns first todo in list', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last returns last todo in list', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('calling shift removes and returns the first todo in list', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('calling pop removes and returns the last todo in list', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('calling isDone returns false when not all items are done', () => {
    expect(list.isDone()).toEqual(false);
  });

  test('attempting to add an item to the list that is not a todo object throws a TypeError', () => {
    let list2 = new TodoList();
    expect(() => list.add('something')).toThrow(TypeError);
    expect(() => list.add(list2)).toThrow(TypeError);
  });

  test('calling itemAt returns the item at the specified index, or throws a reference error if invalid index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });

  test('calling markDoneAt marks an item at the specified index done, or throws a reference error if invalid index', () => {
    list.markDoneAt(0);
    expect(list.itemAt(0).isDone()).toEqual(true);
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  });

  test('calling markUndoneAt marks todo at a given item undone', () => {
    list.markDoneAt(0);
    list.markDoneAt(1);
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  });

  test('calling markAllDone marks all todos as done', () => {
    list.markAllDone();
    list.forEach(todo => {
      expect(todo.isDone()).toBe(true);
    });
  });

  test('calling removeAt removes an item at the specified index', () => {
    expect(list.removeAt(1)).toEqual([todo2]);
    expect(list.toArray()).toEqual([todo1, todo3]);
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('verify that toString works when one of the todos is done', () => {
    todo1.markDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns appropriate string when all todos are done', () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over the elements in list', () => {
    let result = [];
    list.forEach(todo => result.push(todo));
    expect(result).toEqual([todo1, todo2, todo3]);
  });

  test('filter returns a new TodoList object filtered by given criteria', () => {
    todo1.markDone();
    let newList = list.filter(todo => todo.isDone());
    expect(newList.toArray()).toEqual([todo1]);
  });

  test('calling allDone returns a new TodoList object with the done items', () => {
    todo1.markDone();
    todo2.markDone();
    let doneList = list.allDone();
    expect(doneList.toArray()).toEqual([todo1, todo2]);
  });
});

