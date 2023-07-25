import { useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };
  const handleChange = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todo__item" onSubmit={(e) => handleChange(e, todo.id)}>
      {edit ? (
        <input
          type="text"
          className="edit__input"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <p className="todo__item-text todo__item-text--isDone">{todo.todo}</p>
      ) : (
        <p className="todo__item-text">{todo.todo}</p>
      )}

      <div>
        <span onClick={handleEdit}>
          <AiFillEdit
            style={{
              padding: ".3rem",
              cursor: "pointer",
              color: "black",
              fontSize: "2.3rem",
            }}
          />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
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
