const API = 'http://localhost:5000/api/tasks';

async function createTask() {

  const title = document.getElementById('title').value;
  const priority = document.getElementById('priority').value;
  const dueDate = document.getElementById('dueDate').value;

  await fetch(API, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      title,
      priority,
      dueDate,
      status: 'todo'
    })
  });

  loadTasks();
}

async function loadTasks() {

  const response = await fetch(API);

  const tasks = await response.json();

  document.getElementById('todo').innerHTML = '';
  document.getElementById('progress').innerHTML = '';
  document.getElementById('completed').innerHTML = '';

  tasks.forEach(task => {

    const div = document.createElement('div');

    div.className = `task ${task.priority}`;

    div.innerHTML = `
      <h3>${task.title}</h3>

      <p>${task.priority}</p>

      <p>${task.dueDate || ''}</p>

      <button onclick="moveTask(${task.id}, 'progress')">
        Progress
      </button>

      <button onclick="moveTask(${task.id}, 'completed')">
        Complete
      </button>

      <button onclick="deleteTask(${task.id})">
        Delete
      </button>
    `;

    document.getElementById(task.status).appendChild(div);
  });
}

async function moveTask(id, status) {

  await fetch(`${API}/${id}`, {

    method: 'PUT',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({ status })
  });

  loadTasks();
}

async function deleteTask(id) {

  await fetch(`${API}/${id}`, {
    method: 'DELETE'
  });

  loadTasks();
}

loadTasks();