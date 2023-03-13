import NewItem from "Components/NewItem/NewItem";

import { useAppDispatch } from "redux/redux-hook";
import { addTodo } from "redux/todo/todoSlice";

export default function NewTodo() {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(addTodo(title));
  };

  return <NewItem handleClick={handleNewTodo} />;
}
