import React from "react";

const Todo = (props) => {
  return (
    <ul className="block-container">
      {props.todoArr.map((item, i) => {
        return (
          <li key={i} id={i} className="todo-block">
            <p
              className="todo-content"
              onClick={(event) => {
                event.target.classList.toggle("done");
              }}
            >
              {item}
            </p>
            <button
              type="button"
              name="remove"
              className="todo-remove"
              onClick={props.removeTodo}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
