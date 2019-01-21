import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";


const Logo = () => (
  <div>
    <Link to="/" className="logo">newsdMe</Link>
  </div>
);

export default Logo;