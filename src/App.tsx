import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { JobInfo } from "./Components/JobInfo";
import { JobList } from "./Components/JobList";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";

export const App = () => {
  const isLoggedIn = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/jobList"
            element={isLoggedIn ? <JobList /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobInfo/:jobId" element={<JobInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
