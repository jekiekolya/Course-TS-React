import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "types";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: new Date().toString(),
        title: action.payload,
        completed: false,
      };

      return [...state, newTodo];
    },
    toggleTodo: (state, action: PayloadAction<Todo["id"]>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<Todo["id"]>) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
