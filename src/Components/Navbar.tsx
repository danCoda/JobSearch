import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Job } from "../customTypes";
import { actionCreators, State } from "../State";

export const Navbar = () => {
  const { user } = useSelector((state: State) => state);

  const dispatch = useDispatch();
  const { logoutUser } = bindActionCreators(actionCreators, dispatch);


  return (
    <div>
      <div>swipejobs</div>
      {!user.currentUser && (
        <>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </>
      )}
      {user.currentUser && <div onClick={logoutUser}>Logout</div>}
    </div>
  );
};
