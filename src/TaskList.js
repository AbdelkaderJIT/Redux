import { useSelector } from "react-redux";

import Task from "./Task";
const TaskList = () => {
  const todos = useSelector((state) => state);

  return (
    <div>
      {todos.map((el) => (
        <Task el={el} />
      ))}
    </div>
  );
};
export default TaskList;
