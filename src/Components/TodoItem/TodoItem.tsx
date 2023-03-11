import React from "react";

// Types
import { Todo } from "../../types";
interface ITodoItemProps extends Todo {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

// Component
export default function TodoItem({
  id,
  title,
  completed,
  children,
  style = {},
}: ITodoItemProps) {
  return (
    <li key={id} style={{ color: "white", backgroundColor: "green", ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>Delete</span>
      {children}
    </li>
  );
}
