import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { User } from "../customTypes";
import { actionCreators, State } from "../State";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: State) => state);
  const currentUser = user.currentUser as User;

  const dispatch = useDispatch();
  const { logoutUser } = bindActionCreators(actionCreators, dispatch);

  const logoutOnclickHandler = () => {
    logoutUser();
    navigate("/");
  }
  
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          swipejobs
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!currentUser && (
              <>
                <li>
                  <Link to="/register" className="nav-link text-light">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="nav-link text-light">
                    Login
                  </Link>
                </li>
              </>
            )}
            {currentUser && (
              <>
                <li className="nav-link text-light">
                  {currentUser.firstName} {currentUser.lastName}
                </li>
                <li onClick={logoutOnclickHandler} className="nav-link text-light">
                  Logout
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
