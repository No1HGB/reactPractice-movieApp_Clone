import { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    //never use direct JS to modify state. use func
    ///currentArr's elements in new array
    setToDos((currentArr) => [toDo, ...currentArr]);
    //when send the func, React put first argument(currentArg) in state
    setToDo("");
  };
  //practice through console.log
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));

  return (
    <div>
      <h1>My to Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add to Do</button>
      </form>
      <hr />
      {/* map() transform in every elements in array 
        if 6 elements, map() executed 6times*/}
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default ToDoList;
