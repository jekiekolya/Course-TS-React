import { createSlice } from "@reduxjs/toolkit";
import todoActions from "./todoOperations";

import { Todo } from "types";

type TodoSlice = {
  status: "idle" | "loading" | "finished" | "error";
  todos: Todo[];
};

const initialState: TodoSlice = {
  status: "idle",
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all todos
      .addCase(todoActions.fetchAllTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(todoActions.fetchAllTodos.fulfilled, (state, action) => {
        state.status = "finished";
        state.todos = action.payload;
      })
      .addCase(todoActions.fetchAllTodos.rejected, (state) => {
        state.status = "error";
      })

      // Create
      .addCase(todoActions.createTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(todoActions.createTodo.fulfilled, (state, action) => {
        state.status = "finished";
        state.todos.push(action.payload);
      })
      .addCase(todoActions.createTodo.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default todoSlice.reducer;
