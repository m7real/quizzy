import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="title">
        <h2>Quizzy</h2>
      </div>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
