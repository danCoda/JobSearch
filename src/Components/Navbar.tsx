import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { User } from "../customTypes";
import { actionCreators, State } from "../State";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Bar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: State) => state);
  const currentUser = user.currentUser as User;

  const dispatch = useDispatch();
  const { logoutUser } = bindActionCreators(actionCreators, dispatch);

  const logoutOnclickHandler = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <Bar bg="dark" variant="dark" expand="sm">
      <Container>
        <Bar.Brand href="/">
          swipe<strong>jobs</strong>
        </Bar.Brand>
        <Bar.Toggle aria-controls="basic-Bar-nav" />
        <Bar.Collapse id="basic-Bar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!currentUser && (
              <>
                <Nav.Link href="/register" className="nav-link text-light">
                  Register
                </Nav.Link>
                <Nav.Link href="/login" className="nav-link text-light">
                  Login
                </Nav.Link>
              </>
            )}
            {currentUser && (
              <>
                <Nav.Link className="nav-link text-light">
                  {currentUser.firstName} {currentUser.lastName}
                </Nav.Link>
                <Nav.Link
                  onClick={logoutOnclickHandler}
                  className="nav-link text-light"
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Bar.Collapse>
      </Container>
    </Bar>
  );
};
{
  /* <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          swipe<strong>jobs</strong>
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
    </nav> */
}
