const test = require("node:test");
const assert = require("node:assert");
const { addTask, completeTask, countRemaining } = require("../todo-logic.js");

function sample() {
  let tasks = [];
  tasks = addTask(tasks, "Buy milk");
  tasks = addTask(tasks, "Walk dog");
  tasks = addTask(tasks, "Write report");
  return tasks;
}

test("addTask gives each task a unique id starting at 1", () => {
  assert.deepStrictEqual(sample().map(t => t.id), [1, 2, 3]);
});

test("completeTask completes only the task with the matching id", () => {
  const result = completeTask(sample(), 2);
  assert.deepStrictEqual(result.map(t => t.done), [false, true, false]);
});

test("countRemaining counts tasks that are not done", () => {
  const result = completeTask(sample(), 1);
  assert.strictEqual(countRemaining(result), 2);
});
