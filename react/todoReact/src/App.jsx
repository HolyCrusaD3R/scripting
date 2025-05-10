import { useRef } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const taskList = useRef();
  const addItem = (task) => {
    taskList.current.addItem({ id: Date.now(), content: task });
  };

  return (
    <>
      <Input addItem={addItem} />
      <TodoList ref={taskList} />
    </>
  );
}

export default App;
