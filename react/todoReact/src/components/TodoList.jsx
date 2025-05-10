import { useImperativeHandle, useState } from "react";

export default function TodoList({ ref }) {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState();
  const [editingTaskInput, setEditingTaskInput] = useState();
  useImperativeHandle(ref, () => {
    return {
      addItem(task) {
        setTasks([...tasks, task]);
      },
    };
  });

  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((el) => el.id != id));
  };

  const handleStartEditing = (task) => {
    setEditingTaskId(task.id);
    setEditingTaskInput(task.content);
  };

  const handleEditingTaskInput = (event) => {
    setEditingTaskInput(event.target.value);
  };

  const handleEndEditing = (confirmed) => {
    if (confirmed) {
      setTasks((tasks) => {
        const currTasks = [...tasks];
        return currTasks.map((el) => {
          return el.id === editingTaskId
            ? { id: editingTaskId, content: editingTaskInput }
            : el;
        });
      });
    }
    setEditingTaskId(undefined);
    setEditingTaskInput(undefined);
  };

  return (
    <ul>
      {tasks.map((el) => (
        <li key={el.id}>
          {editingTaskId === el.id ? (
            <>
              <input
                value={editingTaskInput}
                onChange={handleEditingTaskInput}
              />
              <button onClick={() => handleEndEditing(true)}>Confirm</button>{" "}
              <button onClick={() => handleEndEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              {el.content}
              <button onClick={() => handleStartEditing(el)}>Edit</button>
            </>
          )}
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
