import "./App.css";
import React from "react";
import Todo from "./Component/Todo";

class App extends React.Component {
  state = {
    todoArr: [],
  };

  addTodo = (event) => {
    if (this.state.todoArr.length >= 10) {
      return alert("limit reched");
    }
    if (!event.target.parentNode.firstChild.value.trim()) {
      return;
    }
    this.setState(
      (pastState) => {
        return {
          todoArr: [
            ...pastState.todoArr,
            event.target.parentNode.firstChild.value,
          ],
        };
      },
      () => {
        event.target.parentNode.firstChild.value = "";
      }
    );
  };

  removeTodo = (event) => {
    this.state.todoArr.splice(event.target.parentNode.id, 1);
    this.setState((pastState) => {
      return {
        todoArr: pastState.todoArr,
      };
    });
  };

  resetTodo = () => {
    this.setState({
      todoArr: [],
    });
  };

  render() {
    return (
      <div className="App App-header">
        <div className="container">
          <input
            type="text"
            id="intary"
            name="intary"
            placeholder="write what to do"
            autocomplete="off"
            className="text-field"
          />
          <button
            onClick={this.addTodo}
            className="add-btn"
            type="button"
            name="add"
          >
            Add
          </button>
          <button
            onClick={this.resetTodo}
            className="reset-btn"
            type="button"
            name="Reset"
          >
            Reset
          </button>
          <Todo todoArr={this.state.todoArr} removeTodo={this.removeTodo} />
          <div className="todo-container"></div>
          <h1 className="title">To-Do Lest</h1>
        </div>
      </div>
    );
  }
}

export default App;
