import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { Todo } from "types";

// Operations
const fetchAllTodos = createAsyncThunk("todos/fetchAllTodos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );

  return (await response.json()) as Todo[];
});

const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (text: string) => {
    const newTodo: Required<Omit<Todo, "id">> = {
      title: text,
      completed: false,
      userId: 1,
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    const data = (await res.json()) as Todo;

    return data;
  }
);

const todoActions = {
  fetchAllTodos,
  createTodo,
};

export default todoActions;
