import React, { useState } from "react";
import Task from "./Task";

const Home = () => {
  const [tasks, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([
      ...tasks,
      {
        title,
        description,
      },
    ]);
  };
  const deleteTask = (index) => {
    const newArr = tasks.filter((val, i) => {
      return i !== index;
    });
    console.log(newArr);
    setTask(newArr);
  };

  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter daily goals"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
      </form>
      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
