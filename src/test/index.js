const Todos = require("./todos");

const todos = new Todos();

todos.add("one task");
console.log(todos.list());

todos.complete("one task");
console.log(todos.list());
