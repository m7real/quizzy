import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast } from "react-toastify";
import Option from "../Option/Option";
import "react-toastify/dist/ReactToastify.css";
import "./QuizItem.css";

const QuizItem = ({ question, idx }) => {
  const { id, question: qn, options, correctAnswer } = question;
  const notify = () => toast(`Correct Answer: ${correctAnswer}`);

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
      <EyeIcon onClick={notify} className="eye-icon"></EyeIcon>
    </div>
  );
};

export default QuizItem;
