import "./styles.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
export default function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}
