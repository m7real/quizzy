import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
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
        <ArrowRightIcon className="start-icon"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default Topic;
