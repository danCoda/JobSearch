import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Bar from "react-bootstrap/Navbar";
import { User } from "../customTypes";
import { actionCreators, State } from "../State";

export const Navbar: React.FC = () => {
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
