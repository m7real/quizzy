import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Option from "../Option/Option";
import "./QuizItem.css";

const QuizItem = ({ question, idx }) => {
  const { id, question: qn, options, correctAnswer } = question;
  return (
    <div className="quiz">
      <p className="quiz-title">
        Quiz {idx + 1}. {`${qn.slice(3, -4)}`}
      </p>
      <div className="options-container">
        {options.map((option, index) => (
          <Option key={index} option={option} idx={index} id={id} correctAnswer={correctAnswer}></Option>
        ))}
      </div>
      <EyeIcon onClick={() => alert(`Correct Answer: ${correctAnswer}`)} className="eye-icon"></EyeIcon>
    </div>
  );
};

export default QuizItem;
