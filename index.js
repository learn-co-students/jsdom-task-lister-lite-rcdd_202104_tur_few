const submitButton = document.getElementById("submit-button");


submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const input = document.getElementById("new-task-description").value;
    const list = document.getElementById("tasks");
    
    const listItem = document.createElement("li");
    listItem.textContent = input;
    list.appendChild(listItem);

    const closeButton = document.createElement("button");
    closeButton.id = "close";
    closeButton.textContent = "X";
    list.appendChild(closeButton);
});

// closeButton.addEventListener("click", (e) => {

// })