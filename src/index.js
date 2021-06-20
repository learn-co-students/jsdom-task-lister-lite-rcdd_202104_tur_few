document.addEventListener("DOMContentLoaded", () => {
  /*let newtask = document.querySelector("#new-task-description").value;
  let tasks = document.querySelector("#tasks").value;
let tasks = newtask;*/
const newTaskForm = document.getElementById("create-task-form");
 const newTaskDescription = document.getElementById("new-task-description");
 const newTaskPriority = document.getElementById("new-task-priority");

 const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);
  // your code here
});

const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
