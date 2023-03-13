import "./App.css";

// Components
import TodoList from "Components/TodoList/TodoList";
import NewTodo from "Components/NewTodo/NewTodo";

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
