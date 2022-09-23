import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Job } from "../customTypes";
import { State } from "../State";

export const Navbar = () => {
  return (
    <div>
      <div>swipejobs</div>
      <div>Register</div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>Logout</div>
    </div>
  );
};
