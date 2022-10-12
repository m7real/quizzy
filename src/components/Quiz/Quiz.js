import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizItem from "../QuizItem/QuizItem";
import "./Quiz.css";

const Quiz = () => {
  const quizes = useLoaderData().data;
  return (
    <div>
      <h2 className="topic-title">Quiz of {quizes.name}</h2>
      {quizes.questions.map((question, idx) => (
        <QuizItem key={question.id} question={question} idx={idx}></QuizItem>
      ))}
    </div>
  );
};

export default Quiz;
