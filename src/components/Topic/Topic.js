import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { id, name, total, logo } = topic;
  return (
    <div className="topic">
      <img src={logo} alt="" />
      <h2>{name}</h2>
      <p>Quiz: {total}</p>
    </div>
  );
};

export default Topic;
