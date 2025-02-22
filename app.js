    // selectors
    const todoInput=document.querySelector(".todo-input");
    const todoButton=document.querySelector(".todo-button");
    const todoList=document.querySelector(".todo-list");
    const filteroption=document.querySelector(".filter-todo")
    //event listeners
  
    todoButton.addEventListener("click",addTodo);
    todoList.addEventListener("click",deleteCheck);
    filteroption.addEventListener("click",filterTodo);
    // functions
    function addTodo(e){
        e.preventDefault();
       
        // add div 
        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");
        //create a li to our div
        const newtodo=document.createElement("li");
        newtodo.classList.add("todo-item");
        newtodo.innerText= todoInput.value;
        todoDiv.appendChild(newtodo);
        //creating button
        const completedButton=document.createElement('button');
        completedButton.innerHTML='<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn")
        todoDiv.appendChild(completedButton);
       
        //creating trash button
        const trashButton=document.createElement('button');
       trashButton.classList.add("trash-btn")
        trashButton.innerHTML='<i class="fas fa-trash"></i>';
        todoDiv.appendChild(trashButton);
        todoList .appendChild(todoDiv);
        todoInput.value="";
}

function deleteCheck(e){
const item=e.target;
//deleting Todo
if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement;
    todo.remove();
    //checkmark

    }
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
}
}


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }
  
  




















