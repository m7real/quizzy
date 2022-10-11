import React from "react";
import "./Option.css";

const Option = ({ option, index, id, correctAnswer }) => {
  const handleCorrectCheck = () => {
    option === correctAnswer ? alert("Correct Answer") : alert("Wrong Answer");
  };
  return (
    <label htmlFor={index}>
      <div className="option">
        <input onClick={handleCorrectCheck} type="radio" name={id} id={index} />
        {option}
      </div>
    </label>
  );
};

export default Option;
