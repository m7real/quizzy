import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { id, name, total, logo } = topic;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`topic/${id}`);
  };
  return (
    <div className="topic">
      <img src={logo} alt="" />
      <h2>{name}</h2>
      <p>Quiz: {total}</p>
      <button onClick={handleNavigate} className="btn-start">
        Start Solving
      </button>
    </div>
  );
};

export default Topic;
