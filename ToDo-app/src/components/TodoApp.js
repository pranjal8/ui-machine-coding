import React, { useState } from "react";
import ReactDOM from "react-dom";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = { id: Date.now(), text: taskInput, completed: false };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true; // "all" case
  });

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h3>ToDo List</h3>
      <input
        type="text"
        placeholder="Add new task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}> Add</button>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTasks.map((item) => (
          <>
            <li
              key={item.id}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {" "}
              {item.text}
              <button onClick={() => toggleTask(item.id)}>
                {" "}
                {item.completed ? "Undo" : "Completed"}{" "}
              </button>
              <button onClick={() => deleteTask(item.id)}>❌</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
