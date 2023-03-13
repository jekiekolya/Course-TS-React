import { useEffect } from "react";

import { Todo } from "types";
import TodoItem from "Components/TodoItem/TodoItem";

import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/redux-hook";
import { removeTodo, toggleTodo } from "redux/todo/todoSlice";
import { todosSelectors } from "redux/todo/todoSelectors";
import todoActions from "redux/todo/todoOperations";

export default function AsyncTodoList() {
  const list = useSelector(todosSelectors.getAllTodos);

  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };
  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  useEffect(() => {
    dispatch(todoActions.fetchAllTodos());
  }, [dispatch]);

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          onRemove={handleRemoveTodo}
          onToggle={handleToggleTodo}
          {...todo}
        />
      ))}
    </ul>
  );
}
