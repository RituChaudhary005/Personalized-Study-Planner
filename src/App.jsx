import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>📚 Personalized Study Planner</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <CalendarView tasks={tasks} />
    </div>
  );
}

export default App;