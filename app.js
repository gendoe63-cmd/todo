// DOM code. Uses the pure functions from todo-logic.js.

let tasks = [];

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");
const remaining = document.getElementById("remaining");

function render() {
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.done ? " done" : "");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;
    li.appendChild(span);

    if (!task.done) {
      const btn = document.createElement("button");
      btn.className = "btn btn-complete";
      btn.textContent = "Mark complete";
      btn.dataset.id = task.id;
      btn.addEventListener("click", onCompleteClick);
      li.appendChild(btn);
    }

    list.appendChild(li);
  });

  const n = countRemaining(tasks);
  remaining.textContent = n + (n === 1 ? " task remaining" : " tasks remaining");
}

function onCompleteClick(event) {
  const id = Number(event.target.dataset.id);
  console.log("Completing task with id:", id);
  tasks = completeTask(tasks, id);
  render();
}

function onAddClick() {
  if (!input.value.trim()) return;
  tasks = addTask(tasks, input.value);
  input.value = "";
  input.focus();
  render();
}

addBtn.addEventListener("click", onAddClick);
input.addEventListener("keydown", e => { if (e.key === "Enter") onAddClick(); });

render();
