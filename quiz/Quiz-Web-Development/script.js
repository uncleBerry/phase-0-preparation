const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const dateDisplay = document.getElementById('date-display');

// Menampilkan Tanggal Hari Ini
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.innerText = new Date().toLocaleDateString('id-ID', options);

// Load data dari LocalStorage saat startup
document.addEventListener('DOMContentLoaded', getTodos);

// Fungsi Menambah Tugas
function addTask() {
    if (input.value.trim() === '') return;

    createTodoElement(input.value);
    saveLocalTodo(input.value);
    input.value = '';
}

function createTodoElement(text) {
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">×</button>
    `;

    // Klik pada teks untuk menandai selesai
    li.addEventListener('click', (e) => {
        if(e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
        }
    });

    // Klik tombol hapus
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        removeLocalTodo(text);
    });

    todoList.appendChild(li);
}

// Logic untuk tombol Tambah
addBtn.addEventListener('click', addTask);

// Support tombol Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// --- Local Storage Logic ---
function saveLocalTodo(todo) {
    let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    todos.forEach(todo => createTodoElement(todo));
}

function removeLocalTodo(todo) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    const todoIndex = todos.indexOf(todo);
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}