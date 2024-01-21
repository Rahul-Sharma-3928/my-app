import React from "react";

const Task = ({ title, description }) => {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button>x</button>
    </div>
  );
};

export default Task;
