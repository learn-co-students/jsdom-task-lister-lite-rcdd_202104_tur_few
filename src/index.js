document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  document.getElementById("newButton").addEventListener("click", function(e) {
    
    e.preventDefault();
    
    //let userInput = document.getElementById("new-task-description");
    let listButton = document.createElement("button");
    listButton.innerText = "X"
    listButton.style.marginLeft = "5px"
    let listUl = document.createElement("li");
    listUl.innerHTML = (document.getElementById("new-task-description").value);
    
    let list1 = document.getElementById("tasks");
    listUl.appendChild(listButton);
    list1.appendChild(listUl);
    list1.innerText;
  

    listButton.addEventListener("click", function() {
      
      
      listUl.remove();
    }
    )

    
    
    
    
  }
  )





}
);







// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
  
  
//   document.getElementById("newButton").addEventListener("click", function(e) {
    
//     e.preventDefault();
    
//     //let userInput = document.getElementById("new-task-description");
//     let listButton = document.createElement("button");
//     listButton.innerText = "x"
//     listButton.style.marginLeft = "5px"
//     let listUl = document.createElement("li");
//     listUl.innerHTML = (document.getElementById("new-task-description").value);
    
//     let list1 = document.getElementById("tasks");
//     listUl.appendChild(listButton);
//     list1.appendChild(listUl);
//     return list1.innerText;
//   }
  
//   )
//   let listButton = document.createElement("button");
//   listButton.addEventListener("click", function(i) {
//     i.preventDefault();
//     listUl.remove();
    
//     }

//   }
//   )

  
  
  
  
// });