import { useState } from "react";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((curArray) => [toDo, ...curArray]);
    setToDo("");
  };

  return (
    <div>
      <div>
        <h1>My Todo! ({toDos.length})</h1>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do"
          value={toDo}
          onChange={onChange}
        ></input>
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
