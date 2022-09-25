import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../Hooks/useLogin";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isPending } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await login(email, password);
    alert(
      "User profiles are currently not available.\n\nClick 'Test here' instead"
    );
  };

  const setTestAccount = async () => {
    await login(email, password);
    navigate("/jobList");
  };

  return (
    <div className="mx-sm-auto col-lg-5 mt-sm-5">
      <h2>Login</h2>
      <p>
        If you have no account,{" "}
        <strong>
          <a href="/register">Click here</a>
        </strong>{" "}
        to Register
      </p>
      <Alert variant="warning">
        If you are <em>Jim Rose</em>, and you probably are,{"   "}
        {isPending && (
          <button className="btn btn-warning" disabled>
            Loading...
          </button>
        )}
        {!isPending && (
          <button
            type="button"
            className="btn btn-warning"
            onClick={setTestAccount}
          >
            Test here
          </button>
        )}
      </Alert>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputEmail">
            Email
          </label>
          <input
            className="form-control"
            id="inputEmail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputPassword">
            Password
          </label>
          <input
            className="form-control"
            id="inputPassword"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {isPending && (
          <button className="btn btn-primary" disabled>
            Loading...
          </button>
        )}
        {!isPending && <button className="btn btn-primary">Login</button>}
        {error && <p>Error! {error}</p>}
      </form>
    </div>
  );
};
