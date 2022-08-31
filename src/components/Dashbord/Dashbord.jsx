import React from "react";
import { Link } from "react-router-dom";
import "./Dashbord.scss";

export default function Dashbord() {
  return (
    <div className="dashbord">
      <Link to="/">About</Link>
      <Link to="/about">Skills & Tools</Link>
      <Link to="/works">My Works</Link>
    </div>
  );
}
