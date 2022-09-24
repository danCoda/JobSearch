import React, { useState } from "react";
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
    alert("User profiles are not available. Click Test instead");
  };

  const setTestAccount = async () => {
    await login(email, password);
    navigate("/jobList");
  };

  return (
    <>
      <h2>Login {isPending}</h2>
      <p>
        If you have no account,{" "}
        <strong>
          <a href="/register">Click here</a>
        </strong>{" "}
        to Register
      </p>
      <p>
        If you are <em>Jim Rose</em>,{" "}
        <button onClick={setTestAccount}>Test</button>
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {isPending && <button disabled>Loading...</button>}
        {!isPending && <button>Login</button>}
        {error && <p>Error! {error}</p>}
      </form>
    </>
  );
};
