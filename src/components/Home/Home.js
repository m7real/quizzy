import React from "react";
import { useLoaderData } from "react-router-dom";
import Cover from "../Cover/Cover";
import Topic from "../Topic/Topic";
import "./Home.css";

const Home = () => {
  const topics = useLoaderData().data;
  console.log(topics);
  return (
    <div>
      <Cover></Cover>
      <div className="topics-container">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
