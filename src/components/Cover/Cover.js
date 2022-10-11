import React from "react";
import "./Cover.css";
import cover from "../../cover.png";

const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-left">
        <h2>Learn new concepts each minute</h2>
        <p>We help you to prepare for exams and interviews</p>
      </div>
      <div className="cover-right">
        <img src={cover} alt="" />
      </div>
    </div>
  );
};

export default Cover;
