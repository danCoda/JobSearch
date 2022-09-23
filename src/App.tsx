import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import "./App.css";
import { JobList } from "./Components/JobList";
import { Navbar } from "./Components/Navbar";
import {Login } from "./Pages/Login";
export const App = () => {
  const isLoggedIn = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <header>
          <h1>swipejobs</h1>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div>
                  A Digital <strong>Staffing</strong> Company
                </div>
                <p>
                  To find <strong>Available</strong> jobs for you,{" "}
                  <a href="/jobList">Click here</a>
                </p>
              </>
            }
          />

          <Route path="/jobList" element={isLoggedIn? <JobList /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
