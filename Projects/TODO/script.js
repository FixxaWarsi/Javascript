const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const taskCounter = document.getElementById('task-counter');
const clearAllBtn = document.getElementById('clear-all');
const filterBtns = document.querySelectorAll('.filter-btn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// Save and refresh UI
function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

// Render todos based on filters
function renderTodos() {
    todoList.innerHTML = '';

    let filteredTodos = todos;
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    if (filteredTodos.length === 0) {
        todoList.innerHTML = `<li style="text-align: center; color: #a4b0be; padding: 15px;">No tasks found</li>`;
    }

    filteredTodos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="todo-left">
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} onclick="toggleComplete(${todo.id})">
                <span class="todo-text">${escapeHtml(todo.text)}</span>
            </div>
            <div class="todo-actions">
                <button class="action-btn edit" onclick="editTodo(${todo.id})"><i class="fa-solid fa-pen"></i></button>
                <button class="action-btn delete" onclick="deleteTodo(${todo.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        todoList.appendChild(li);
    });

    // Update active tasks counter
    const activeCount = todos.filter(todo => !todo.completed).length;
    taskCounter.textContent = `${activeCount} task${activeCount === 1 ? '' : 's'} left`;
}

// Security utility to prevent script injection in innerHTML
function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Create Todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    const newTodo = {
        id: Date.now(),
        text,
        completed: false
    };

    todos.push(newTodo);
    todoInput.value = '';
    saveAndRender();
});

// Toggle Complete Status (Update)
window.toggleComplete = function(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    saveAndRender();
};

// Edit Todo (Update)
window.editTodo = function(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    const updatedText = prompt("Edit your task:", todo.text);
    if (updatedText !== null && updatedText.trim() !== "") {
        todo.text = updatedText.trim();
        saveAndRender();
    }
};

// Delete Todo (Delete)
window.deleteTodo = function(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveAndRender();
};

// Clear All
clearAllBtn.addEventListener('click', () => {
    todos = [];
    saveAndRender();
});

// Filter event listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderTodos();
    });
});

// Initial load
renderTodos();