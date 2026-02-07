import React from "react";

function CalendarView({ tasks }) {
  return (
    <div className="calendar-view">
      <h2>🗓 Calendar View</h2>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="calendar-task">
            <strong>{task.date}</strong>: {task.title}
          </div>
        ))
      ) : (
        <p>No tasks scheduled.</p>
      )}
    </div>
  );
}

export default CalendarView;