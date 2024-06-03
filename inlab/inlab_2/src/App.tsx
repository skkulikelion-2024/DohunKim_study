import { useState } from "react";
import "./App.css";

interface TodoListProps {
  todoList: string[];
}

function TodoList({ todoList }: TodoListProps) {
  return (
    <ul>
      {todoList.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(input);
  };

  const clickHandler = () => {
    setTodoList([...todoList, input]);
    setInput("");
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="add to list"
        onChange={inputHandler}
        value={input}
      />
      <button onClick={clickHandler}>추가</button>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
