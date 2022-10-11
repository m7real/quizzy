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
        {options.map((option) => (
          <Option key={option} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default QuizItem;
