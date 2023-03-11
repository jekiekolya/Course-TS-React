import React from "react";
import "./App.css";

// Components
import TodoItem from "./Components/TodoItem/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem id="as" completed={false} title="First ToDo" />
    </div>
  );
}

export default App;
