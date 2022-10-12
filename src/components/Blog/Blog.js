import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import "./Blog.css";

const Blog = () => {
  const items = [
    {
      id: 1,
      q: "What is the purpose of React Router?",
      a: "",
    },
    {
      id: 2,
      q: "How does context API work?",
      a: "",
    },
    {
      id: 3,
      q: "Write about useRef hook.",
      a: "",
    },
  ];
  return (
    <div className=" blog-container">
      <h2 className="mb-4">FAQ</h2>
      <div>
        {items.map((item) => (
          <AccordionItem key={item.id} item={item}></AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default Blog;
