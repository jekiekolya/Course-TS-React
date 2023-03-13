import { createAsyncThunk } from "@reduxjs/toolkit";

// Types
import { Todo } from "types";
import { TodoSlice } from "./asyncTodoSlice";

// Operations
const fetchAllTodos = createAsyncThunk<
  Todo[],
  undefined,
  { state: { todos: TodoSlice } }
>(
  "todos/fetchAllTodos",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    return await response.json();
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().todos;

      if (status === "loading") {
        return false;
      }
    },
  }
);

const createTodo = createAsyncThunk<Todo, string>(
  "todos/createTodo",
  async (text) => {
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

    const data = await res.json();

    return data;
  }
);

const todoActions = {
  fetchAllTodos,
  createTodo,
};

export default todoActions;
