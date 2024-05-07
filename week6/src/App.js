import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when Keyword changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when Counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when KeyWord && counter changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="search here..."
        onChange={onChange}
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>clickme</button>
    </div>
  );
}

export default App;
