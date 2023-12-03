import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContex = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((a) => a.id !== id));
  };
  return (
    <TaskContex.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContex.Provider>
  );
}
