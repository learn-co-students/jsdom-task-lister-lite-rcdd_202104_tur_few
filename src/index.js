document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const button = document.querySelector(".submit");
  const task = document.querySelector("#tasks");
  button.addEventListener("click", () => {
    event.preventDefault();
    const des = document.querySelector("#new-task-description").value;
    let li = document.createElement("li");
    li.textContent = des;
    task.appendChild(li);
  });
});
