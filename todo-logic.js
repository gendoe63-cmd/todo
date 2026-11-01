// Pure to-do logic. No DOM code in this file.

function addTask(tasks, text) {
  const nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  return [...tasks, { id: nextId, text: text.trim(), done: false }];
}

function completeTask(tasks, id) {
  return tasks.map((task, index) =>
    index === id ? { ...task, done: true } : task
  );
}

function countRemaining(tasks) {
  return tasks.filter(task => task.done).length;
}

if (typeof module !== "undefined") {
  module.exports = { addTask, completeTask, countRemaining };
}
