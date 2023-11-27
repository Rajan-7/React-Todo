import React, { useEffect, useState } from "react";
import "./style.css";

const localFunction = () =>{
  const list = localStorage.getItem("todoId");
  if(list){
    return JSON.parse(list);
  }else{
    return [];
  }
}

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState(localFunction());
  const [editItem, setEditItem] = useState("");
  const [toggleThis, setToggleThis] = useState(false);

  // adding input value of the users
  const addItems = () => {
    if (!inputValue) {
      console.log("Please fill up the value");
    } else if (inputValue && toggleThis) {
      setItemList(
        itemList.map((curElem) => {
          if (curElem.id === editItem) {
            // to create the new object using spread operator
            return { ...curElem, name: inputValue };
          } else {
            return curElem;
          }
        })
      );
      setInputValue("");
      setToggleThis(false);
      setEditItem(null);
    } else {
      const newInputData = {
        id: new Date().getTime().toString(),
        name: inputValue,
      };
      setItemList([...itemList, newInputData]);
      setInputValue("");
    }
  };

  // deleting the items
  const deleteItems = (delid) => {
    const newItems = itemList.filter((curElm) => {
      return delid !== curElm.id;
    });
    setItemList(newItems);
  };

  // editing the items
  const editItems = (edid) => {
    const editThis = itemList.find((curElm) => {
      return edid === curElm.id;
    });
    setInputValue(editThis.name);
    setEditItem(edid);
    setToggleThis(true);
  };

  // removing all items
  const removeAll = () => {
    setItemList([]);
  };

  // implementing localStorage
  useEffect(()=>{
    localStorage.setItem('todoId',JSON.stringify(itemList))
  })

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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {toggleThis ? (
              <i className="far fa-edit add-btn" onClick={addItems}></i>
            ) : (
              <i className="far fa-add add-btn" onClick={addItems}></i>
            )}
          </div>
          <div className="showItems">
            {itemList.map((curElm) => {
              return (
                <div className="eachItem" key={curElm.id}>
                  <h3>{curElm.name}</h3>
                  <div className="todo-actions">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItems(curElm.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItems(curElm.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button onClick={removeAll}>
              <span>REMOVE LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
