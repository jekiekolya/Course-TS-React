import React from "react";

// Types
import { Todo } from "../../types";
interface ITodoItemProps extends Todo {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onRemove: (id: Todo["id"]) => void;
  onToggle: (id: Todo["id"]) => void;
}

// Component
export default function TodoItem({
  id,
  title,
  completed,
  children,
  style = {},
  onRemove,
  onToggle,
}: ITodoItemProps) {
  return (
    <li key={id} style={{ color: "white", backgroundColor: "green", ...style }}>
      <input
        type="checkbox"
        checked={completed}
        onClick={() => {
          onToggle(id);
        }}
      />
      <span>{title}</span>
      <span
        onClick={() => {
          onRemove(id);
        }}
      >
        Delete
      </span>
      {children}
    </li>
  );
}
