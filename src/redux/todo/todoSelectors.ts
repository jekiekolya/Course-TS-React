import { RootState } from "redux/store";

const getAllTodos = (state: RootState) => state.todos.todos;

export const todosSelectors = { getAllTodos };
