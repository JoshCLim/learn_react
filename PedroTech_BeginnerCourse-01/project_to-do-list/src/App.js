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
        importance: 0,
      },
    ]);
    setNewTask("");
  };

  // generate a new unique task id
  const newTaskId = () => {
    if (tasks.length === 0) {
      return 1;
    } else {
      return tasks[0].id + 1;
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((value) => value.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((value) => {
        if (value.id === taskId) {
          value.complete = !value.complete;
        }
        return value;
      })
    );
  };

  // console.log(tasks);

  return (
    <div className="App">
      <div className="container">
        <div className="addTaskWrapper">
          <input
            className="addTaskInput"
            placeholder="new todo"
            type="text"
            onChange={handleChange}
          />
          <button className="addTaskSubmit" onClick={addTask}>
            +
          </button>
        </div>

        <div className="list">
          {tasks
            .sort((a, b) => {
              if (b.importance - a.importance !== 0) {
                return b.importance - a.importance;
              }
              return b.id - a.id;
            })
            .map((value, index) => (
              <Task
                name={value.name}
                id={value.id}
                complete={value.complete}
                importance={value.importance}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
