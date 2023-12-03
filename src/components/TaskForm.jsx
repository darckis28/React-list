import React, { useContext } from "react";
import { useState } from "react";
import { TaskContex } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContex);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-300 p-10 mb-10">
        <h1 className="text-2xl text-gray-500 font-bold mb-2 text-center ">
          Crea tu tarea
        </h1>
        <input
          value={title}
          placeholder="Escribe tu tarea"
          autoFocus
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2 outline-none"
        />
        <textarea
          value={descripcion}
          placeholder="escribe una descripcion"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2 resize-none outline-none"
        ></textarea>
        <button className="bg-indigo-700 px-3 py-1 text-white text-center block m-auto">
          Guardar
        </button>
      </form>
    </div>
  );
}
