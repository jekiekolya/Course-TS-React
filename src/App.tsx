import "./App.css";

// Components
// import TodoList from "Components/TodoList/TodoList";
import NewTodo from "Components/NewTodo/NewTodo";
import AsyncTodoList from "Components/TodoList/AsyncTodoList";

function App() {
  return (
    <div className="App">
      <NewTodo />
      {/* <TodoList /> */}
      <AsyncTodoList />
    </div>
  );
}

export default App;
