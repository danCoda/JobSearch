import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import "./App.css";
import { JobList } from "./Components/JobList";
import { Navbar } from "./Components/Navbar";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
export const App = () => {
  const isLoggedIn = true;

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

          <Route
            path="/jobList"
            element={isLoggedIn ? <JobList /> : <Login />}
          />
          <Route
            path="/login"
            element={<Login />}
          />          
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
