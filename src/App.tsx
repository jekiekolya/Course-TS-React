import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm/TodoForm";

// Components
import TodoItem from "./Components/TodoItem/TodoItem";

// Types
import { Todo } from "./types";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: text,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div className="App">
      <TodoForm
        value={text}
        handleClick={handleAddTodo}
        onChange={handleChange}
      />
      <TodoItem id="as" completed={false} title="First ToDo" />
    </div>
  );
}

export default App;
