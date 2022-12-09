import "./App.css";
import { useState } from "react";

import { Task } from "./Task";

function App() {
  const [tasks, setTasks] = useState([]); // keep track of tasks
  const [newTask, setNewTask] = useState(""); // keep track of input value

  // handle user typing in input field
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // add a task to tasks[] with name {newTask}
  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: newTaskId(),
        name: newTask,
        complete: false,
      },
    ]);
  };

  // generate a new unique task id
  const newTaskId = () => {
    if (tasks.length === 0) {
      return 1;
    } else {
      return tasks[tasks.length - 1].id + 1;
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((value) => value.id !== taskId));
  };

  const markComplete = (taskId) => {
    setTasks(
      tasks.map((value) => {
        if (value.id === taskId) {
          value.complete = true;
        }
        return value;
      })
    );
  };

  return (
    <div className="App">
      <div className="container">
        <div className="addTask">
          <input
            className="addTaskInput"
            placeholder="task name"
            type="text"
            onChange={handleChange}
          />
          <button className="addTaskSubmit" onClick={addTask}>
            +
          </button>
        </div>

        <div className="list">
          {tasks.map((value, index) => (
            <Task
              name={value.name}
              id={value.id}
              complete={value.complete}
              deleteTask={deleteTask}
              markComplete={markComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
