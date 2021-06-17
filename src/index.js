document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
   const list = document.getElementById("tasks");
   const item = document.getElementById("new-task-description");
   const removeTaks = document.getElementById("removeTask");

   form.addEventListener("submit", (e)=>{
     e.preventDefault();
     const newItem = document.createElement("li");
     newItem.innerHTML = item.value;
     list.append(newItem);
   })
   removeTaks.addEventListener("submit", function(e){
       const li = document.querySelectorAll();
       for (let i = 0; i < li.length; i++){
         if (item.value === li[i].innerHTML){
           list.removeChild(li[i]);
         }
       }
       e.preventDefault();
     });

   });
