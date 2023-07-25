import { Todo } from ".././model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  // console.log(todos);

  return (
    <form className="todo__item">
      {todo.isDone ? (
        <p className="todo__item-text todo__item-text--isDone">{todo.todo}</p>
      ) : (
        <p className="todo__item-text">{todo.todo}</p>
      )}

      <div>
        <span>
          <AiFillEdit
            style={{
              padding: ".3rem",
              cursor: "pointer",
              color: "black",
              fontSize: "2.3rem",
            }}
          />
        </span>
        <span>
          <AiFillDelete
            style={{
              padding: ".3rem",
              cursor: "pointer",
              color: "black",
              fontSize: "2.3rem",
            }}
          />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <MdDone
            style={{
              padding: ".3rem",
              cursor: "pointer",
              color: "black",
              fontSize: "2.3rem",
              fontWeight: "900",
            }}
          />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
