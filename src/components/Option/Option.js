import React from "react";
import { toast } from "react-toastify";
import "./Option.css";

const Option = ({ option, index, id, correctAnswer }) => {
  const notify = () => {
    option === correctAnswer ? toast("Correct Answer") : toast("Wrong Answer");
  };

  return (
    <label htmlFor={index}>
      <div className="option">
        <input onClick={notify} type="radio" name={id} id={index} />
        {option}
      </div>
    </label>
  );
};

export default Option;
