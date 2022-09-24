import React from "react";
import backgroundImage from "../Images/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg";

export const Home = () => {
  return (
    <>
      <img src={backgroundImage} className="img-fluid" alt="..." />
      <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
        <div className="col-md-5 p-lg-2 mx-auto my-5">
          <header>
            <h1>swipejobs</h1>
          </header>
          <div>
            A Digital <strong>Staffing</strong> Company
          </div>
          <p>
            To find <strong>Available</strong> jobs for you,{" "}
            <a href="/jobList">Click here</a>
          </p>
        </div>
      </div>
    </>
  );
};
