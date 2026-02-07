import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h2>📋 Task List</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.title} — {task.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default TaskList;