function createTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoValue = todoInput.value;

    if (!todoValue.trim()) return;

    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = `
    <p>${todoValue}</p>
    <div class="todo-images">
        <img class="checkmarkBtn" src="../assets/checkmark-64.png">
        <img class="removeBtn" src="../assets/x-mark-64.png">
    </div>`;

    document.querySelector('.todo-output').appendChild(newTask);

    todoInput.value = "";
}

function completeTask(event) {
    if (event.target.classList.contains('checkmarkBtn')) {
        const task = event.target.closest('.task');
        task.classList.toggle('completed');
    }
}

function removeTask(event) {
    if (event.target.classList.contains('removeBtn')) {
        const task = event.target.closest('.task');
        task.remove();
    }
}

document.querySelector('.todo-output').addEventListener('click', (event) => {
    completeTask(event);
    removeTask(event);
});

document.getElementById('createTodo').addEventListener('click', createTodo);
document.getElementById('todo-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
        createTodo();
});