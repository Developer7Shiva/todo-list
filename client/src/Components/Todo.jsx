import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [inpVal, setInpVal] = useState("");

  const handleInput = (e) => {
    setInpVal(e.target.value);
  };

  const addTodo = () => {
    setTodo([...todo, inpVal]);
    setInpVal("");
  };

  const deleteTodo = (index) => {
    // const updatedTodo = todo.filter((_, i) => i !== index);
    const updatedTodo = [];
    for (let i = 0; i < todo.length; i++) {
      if (i !== index) {
        console.log(todo[i]);
        updatedTodo.push(todo[i]);
      }
    }
    setTodo([...updatedTodo]);
  };

  return (
    <div>
      <div>
        <h1>Todo List </h1>
        <input type="text" value={inpVal} onChange={handleInput}></input>
        <button onClick={addTodo}> Add New</button>
      </div>
      <div>
        <ul>
          {todo.map((tod, index) => (
            <li key={index}>
              {" "}
              {tod} <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Todo;
