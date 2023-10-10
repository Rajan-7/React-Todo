import React from "react";
import "./style.css";

const Todo = () => {
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <figure>
            <img src="./images/Todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="🖍️ Add Items"
              className="input-class"
            />
          </div>
          <div className="showItems">
            <div className="eachItem">
              <h3>Coding in react</h3>
              <i className="far fa-edit add-btn"></i>
              <i className="far fa-trash-alt add-btn"></i>
            </div>
          </div>
          <div className="showItems">
            <button><span>CHECK LIST</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
