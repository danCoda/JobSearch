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
    console.log("Yoooo, handle the registraiton");
  };

  return (
    <>
      <h2>Register</h2>
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
        <label>
          <span>First name</span>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </label>
        <label>
          <span>Last name</span>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </label>
        <label>
          <span>Phone number</span>
          <input
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </label>
        <label>
          <span>Maximum job distance ({maxJobDistance} miles)</span>
          <input
            type="range"
            min="0"
            step="10"
            max="100"
            onChange={(e) => setMaxJobDistance(Number(e.target.value))}
            value={maxJobDistance}
          />
        </label>
        <button>Register</button>
      </form>
    </>
  );
};