import TaskCard from "./TaskCard";
import { TaskContex } from "../context/TaskContext";
import { useContext } from "react";

export default function TaskList() {
  const { tasks } = useContext(TaskContex);
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
