import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import "./Blog.css";

const Blog = () => {
  const items = [
    {
      id: 1,
      q: "What is the purpose of React Router?",
      a: "React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.",
    },
    {
      id: 2,
      q: "How does context API work?",
      a: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. But how does it works? Well, to use context API React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the 'store' and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state",
    },
    {
      id: 3,
      q: "Write about useRef hook.",
      a: "The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.It  allows us to persist values between renders. We can use this hook to store a mutable value that does not cause a re-render when updated. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook. Only one item can be returned from useRef(). That is an Object called current.",
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
