import React from "react";


function CategoryFilter({categories,onSearch,setFilter}) {

  function userChoice(event){
    const temp = document.querySelector("button.selected")
    if(temp !== null){
      temp.removeAttribute("class")
    }
    const setClass = event.target;
    setClass.setAttribute("class","selected")
    onSearch(event.target.name)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((element,index) => {
        return(
          <button key={index} name={element} onClick={userChoice}>{element}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
