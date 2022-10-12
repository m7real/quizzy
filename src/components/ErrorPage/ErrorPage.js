import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className="container">
      <h2>404</h2>
      <h3>Oops, nothing here...</h3>
      <p>Please Check the URL</p>
      <p>
        Otherwise, <Link to="/">Click here</Link> to redirect to homepage.
      </p>
    </div>
  );
};

export default ErrorPage;
