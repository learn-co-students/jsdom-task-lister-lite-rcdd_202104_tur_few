document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  
  taskForm.addEventListener('submit', function (e){
   e.preventDefault()
   let inputTask = document.getElementById("new-task-description").value;
 
   let node = document.createElement("li");
   let textnode = document.createTextNode(inputTask);
   
   node.appendChild(textnode);
   tasks.appendChild(node);
   
   document.getElementById("new-task-description").value = " ";
  })
  
});
