import { useState } from "react";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  console.log(todo);

  return (
    <header className="header">
      <h1 className="header__h1">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </header>
  );
};

export default App;
