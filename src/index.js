document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //prevent default action of submit and add the content of input form to an list element inside task ul
  document.querySelector("#submitNewTask").addEventListener("click", function(event) {
    event.preventDefault();
    let newTask = document.querySelector("#new-task-description");
    let ulTaskList = document.querySelector("#tasks");    
    let liList = document.createElement("li");
    let buttonList = document.createElement("button");
    liList.appendChild(document.createTextNode(newTask.value + " "));
    liList.appendChild(buttonList);
    buttonList.setAttribute("class",`delete`);
    buttonList.innerText = "X";
    ulTaskList.appendChild(liList); 
    
    //delete button uses button class "delete" and removes the parent node of that button
    // adda common class to all the buttons
    let deleteBtn = document.getElementsByClassName("delete");
    // converting html collection to array, to use array methods
    Array.prototype.slice.call(deleteBtn).forEach(function(item) {
    // iterate and add the event handler to it
    item.addEventListener("click", function(e) {
    e.target.parentNode.remove()})
  });
  }, false);
});

