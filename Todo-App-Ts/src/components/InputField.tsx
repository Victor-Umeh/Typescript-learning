import { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFiled = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        className="input__box"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit" className="input__btn">
        Add
      </button>
    </form>
  );
};

export default InputFiled;
