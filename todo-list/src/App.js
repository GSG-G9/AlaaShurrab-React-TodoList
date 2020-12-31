import "./App.css";
import React from "react";

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
            className="add-btn"
            type="button"
            name="add"
            onClick={this.addTodo}
          >
            Add
          </button>
          <button
            className="reset-btn"
            type="button"
            name="Reset"
            onClick={this.resetTodo}
          >
            Reset
          </button>

          <div className="todo-container">
            <Todo todoArr={this.state.todoArr} />
          </div>
          <h1 className="title">To-Do Lest</h1>
        </div>
      </div>
    );
  }
}

export default App;
