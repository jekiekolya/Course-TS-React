import { createSlice } from "@reduxjs/toolkit";

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
});

export default todoSlice.reducer;
