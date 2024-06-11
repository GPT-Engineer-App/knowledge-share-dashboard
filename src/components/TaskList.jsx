import React, { useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Task 1', status: 'completed' },
  { id: 2, title: 'Task 2', status: 'in-progress' },
  { id: 3, title: 'Task 3', status: 'not-started' },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, status: 'not-started' }]);
      setNewTask('');
    }
  };

  const handleStatusChange = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Opgaver</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="mb-2">
            <span className={`mr-2 ${task.status === 'completed' ? 'text-green-500' : task.status === 'in-progress' ? 'text-yellow-500' : 'text-red-500'}`}>
              {task.title}
            </span>
            <select value={task.status} onChange={(e) => handleStatusChange(task.id, e.target.value)}>
              <option value="not-started">Ikke startet</option>
              <option value="in-progress">I gang</option>
              <option value="completed">Afsluttet</option>
            </select>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ny opgave"
          className="px-3 py-2 mr-2 border rounded"
        />
        <button onClick={handleAddTask} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Tilføj opgave
        </button>
      </div>
    </div>
  );
};

export default TaskList;