import { useRef } from "react";

// Types
interface INewItemProps {
  handleClick: (text: string) => void;
}

export default function NewItem({ handleClick }: INewItemProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input type="text" placeholder="new todo" ref={inputRef} />
      <button onClick={onClick}>add todo</button>
    </>
  );
}
