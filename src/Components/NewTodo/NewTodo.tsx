import NewItem from "Components/NewItem/NewItem";

import { useAppDispatch } from "redux/redux-hook";
import todoActions from "redux/todo/todoOperations";

export default function NewTodo() {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(todoActions.createTodo(title));
  };

  return <NewItem handleClick={handleNewTodo} />;
}
