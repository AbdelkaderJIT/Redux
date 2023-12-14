import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/actions";
const AddTask = () => {
  let [text, setText] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTodo({ id: Math.random(), text, isDone: false }));
    setText("");
  };
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={add}>Add</button>
    </div>
  );
};
export default AddTask;
