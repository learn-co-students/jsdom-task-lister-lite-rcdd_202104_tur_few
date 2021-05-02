document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.querySelector('#create-task-form');
  const loc = document.querySelector('#tasks');
  submitButton.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector('#new-task-description');
    const tasksList = document.createElement('li');
    tasksList.innerHTML=input.value;
    loc.appendChild(tasksList);
  });
//   loc.addEventListener("click", (e) => {
    
// })
})
