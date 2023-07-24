import { Todo } from "../model";
import TodoItem from "./TodoItem";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <ul className="todos">
      {todos.map((t) => (
        <TodoItem todo={t} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
