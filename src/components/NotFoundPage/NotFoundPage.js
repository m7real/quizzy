import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>Oops !!!</h1>
      <h2>Looks Like The Page You Are Looking For Does Not Exist</h2>
      <Link to="/">
        <p>Return To Home</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
