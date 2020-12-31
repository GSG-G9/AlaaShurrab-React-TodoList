import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App App-header">
        <div className="container">
          <input
            type="text"
            id="intary"
            name="intary"
            placeholder="write what to do"
            className="text-field"
          />
          <button className="add-btn" type="button" name="add">
            Add
          </button>
          <button className="reset-btn" type="button" name="Reset">
            Reset
          </button>

          <div className="todo-container"></div>
          <h1 className="title">To-Do Lest</h1>
        </div>
      </div>
    );
  }
}

export default App;
