const todoInput = document.getElementById("addTodoList");
const addTodoBtn = document.getElementById("addBtn");
const todoTable = document.getElementById("todoTable");

function addTodo() {
    const todoValue = todoInput.value.trim();
    
    if (todoValue === "") {
        alert("Please enter a task.");
        return;
    }
    
    const listItem = document.createElement("li");
    listItem.className = "newTodo";
    const taskText = document.createTextNode(todoValue); 
    listItem.appendChild(taskText);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "removeBtn";
    removeBtn.addEventListener("click", () => {
        todoTable.removeChild(listItem); 
    });

    listItem.appendChild(removeBtn);
    todoTable.appendChild(listItem);

    todoInput.value = "";
}

addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});
