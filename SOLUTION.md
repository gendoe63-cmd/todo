# Solution (keep this off camera)

## Bug 1 - wrong task completed (`todo-logic.js`)
`completeTask` compares the array **position** (`index`) with the task **id**. Ids start at 1 and positions start at 0, so every click is off by one.

Before:
```js
function completeTask(tasks, id) {
  return tasks.map((task, index) =>
    index === id ? { ...task, done: true } : task
  );
}
```
After:
```js
function completeTask(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, done: true } : task
  );
}
```

## Bug 2 (bonus) - wrong counter (`todo-logic.js`)
`countRemaining` counts tasks that **are** done.

Fix: change `task.done` to `!task.done` in the filter.

After both fixes, `npm test` should show 3 passing tests.
