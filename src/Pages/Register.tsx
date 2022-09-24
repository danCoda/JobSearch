import React, { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [maxJobDistance, setMaxJobDistance] = useState(30);
  const [phoneNumber, setPhoneNumber] = useState(""); // Is a string.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Todo: Server-side validation and save user details. For testing, please Login ('Test')"
    );
  };

  return (
    <div className="mx-sm-auto col-lg-5 mt-sm-5">
      <h2>Register</h2>
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
        <div className="mb-3">
          <label className="form-label" htmlFor="inputFirstName">
            First name
          </label>
          <input
            className="form-control"
            id="inputFirstName"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputLastName">
            Last name
          </label>
          <input
            className="form-control"
            id="inputLastName"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputPhoneNumber">
            Phone number
          </label>
          <input
            className="form-control"
            id="inputPhoneNumber"
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputMaxJobDistance">
            Maximum job distance ({maxJobDistance} miles)
          </label>
          <input
            className="form-range"
            id="inputMaxJobDistance"
            type="range"
            min="0"
            step="10"
            max="100"
            onChange={(e) => setMaxJobDistance(Number(e.target.value))}
            value={maxJobDistance}
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};
