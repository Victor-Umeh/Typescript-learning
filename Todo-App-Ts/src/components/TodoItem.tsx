import { Todo } from ".././model";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todo__item">
      <p className="todo__item-text">{todo.todo}</p>
    </form>
  );
};

export default TodoItem;
