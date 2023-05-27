import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks,deleteTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            deleteTask={deleteTask}
            text={task.text}
            category={task.category}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
