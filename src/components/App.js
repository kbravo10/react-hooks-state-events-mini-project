import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterChoice, setFilter] = useState("All");
  const [tasks, setTask] = useState(TASKS);

  function onSearch(element) {
    setFilter((filterChoice) => (filterChoice = element));
    const newTasks = TASKS.filter((task) => {
      if (element === "All") return true;
      if (task["category"] === element) return true;
      return false;
    });
    setTask(newTasks);
  }

  function onTaskFormSubmit(element) {
    const newItem = [...tasks, element];
    console.log(newItem);
    setTask((tasks) => (tasks = newItem));
  }

  function deleteTask(element) {
    const displatTask = tasks.filter((task) => {
      if (task.text !== element) {
        return true;
      }
      return false;
    });
    setTask(displatTask);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter categories={CATEGORIES} onSearch={onSearch} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={tasks}
        filterChoice={filterChoice}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
