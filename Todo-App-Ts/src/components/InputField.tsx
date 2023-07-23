import "./input.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputFiled = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
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
