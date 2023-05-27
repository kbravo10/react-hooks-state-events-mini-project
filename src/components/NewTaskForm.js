import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [userInput, setUserInput] = useState("");
  const [userChange, setUserChange] = useState("Code");

  function onInputVal(event) {
    setUserInput(event.target.value);
  }

  function onCategoryChange(event) {
    setUserChange(event.target.value);
  }

  function handleInput(event) {
    event.preventDefault();
    const newItem = {
      text: userInput,
      category: userChange,
    };
    onTaskFormSubmit(newItem)
  }

  return (
    <form className="new-task-form" onSubmit={handleInput}>
      <label>
        Details
        <input type="text" name="text" onChange={onInputVal} />
      </label>
      <label>
        Category
        <select name="category" onChange={onCategoryChange}>
          {/* render <option> elements for each category here */}
          {categories.map((element, index) => {
            if (element !== "All") {
              return <option key={index}>{element}</option>;
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
