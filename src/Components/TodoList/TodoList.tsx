import { Todo } from "types";
import TodoItem from "Components/TodoItem/TodoItem";

import { useAppDispatch, useAppSelector } from "redux/redux-hook";
import { removeTodo, toggleTodo } from "redux/todo/todoSlice";

export default function TodoList() {
  const list = useAppSelector((state) => state.todos);

  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };
  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

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
