import React from "react";

// Types
interface ITodoFormProps {
  value: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: () => void;
}

export default function TodoForm({
  value,
  onChange,
  handleClick,
}: ITodoFormProps) {
  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleClick}>add todo</button>
    </>
  );
}
