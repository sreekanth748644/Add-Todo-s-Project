    // selectors
    const todoInput=document.querySelector(".todo-input");
    const todoButton=document.querySelector(".todo-button");
    const todoList=document.querySelector(".todo-list");
    //event listeners
    todoButton.addEventListener("click",addTodo);
    // functions
    function addTodo(e){
        e.preventDefault();
       
        // add div 
        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");
        //create a li to our div
        const newtodo=document.createElement("li");
        newtodo.classList.add("todo-item");
        newtodo.innerText="hello";
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
    }
   