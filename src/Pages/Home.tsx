import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Images/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg";

export const Home = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/jobList");
  };

  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
        <div className="col-md-8 p-lg-2 mx-auto my-5">
          <header>
            <h1 className="display-1">
              swipe<strong>jobs</strong>
            </h1>
          </header>
          <p className="fs-4">
            A Digital <strong>Staffing</strong> Company
          </p>
          <br />
          <p>
            To find <strong>Available jobs </strong>
            <Button variant="outline-primary" onClick={onClickHandler}>
              Click here
            </Button>
          </p>
        </div>
        <img src={backgroundImage} className="img-fluid" alt="..." />
      </div>
    </>
  );
};
