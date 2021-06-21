document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
    form.addEventListener("submit", function submitHandler(e){
      e.preventDefault();
    
    const input = document.getElementById("new-task-description").value;
    console.log(input)
    
    const ul = document.getElementById("tasks")
    const li = document.createElement("li")
    li.innerHTML = input
    ul.appendChild(li)
    
    const removeButton = document.createElement("button")
    removeButton.innerHTML = "X"
    removeButton.style.marginLeft = "5px"
    li.appendChild(removeButton)
    
    removeButton.addEventListener("click", function deleteLi() {
      li.remove()
    })
  })
});