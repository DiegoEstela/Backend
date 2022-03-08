const Todos = require("./todos");
const assert = require("assert");

describe("test para tareas", () => {
  it("Deberia crear un instancia de la clase todo", () => {
    const todos = new Todos();
    assert.strictEqual(todos.list().length, 0);
  });

  it("Deberia agregar una tarea", () => {
    const todos = new Todos();
    todos.add("one task");
    assert.strictEqual(todos.list().length, 1);
    assert.strictEqual(todos.list()[0].title, "one task");
  });
});
