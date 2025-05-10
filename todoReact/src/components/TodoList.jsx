import { useImperativeHandle, useState } from "react";

export default function TodoList({ ref }) {
  const [tasks, setTasks] = useState([]);

  useImperativeHandle(ref, () => {
    return {
      addItem(task) {
        setTasks([...tasks, task]);
      },
    };
  });

  return (
    <ul>
      {tasks.map((el) => (
        <li key={el.id}>
          {el.content}
          <button>Edit</button>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}
