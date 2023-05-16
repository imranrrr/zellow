import React, { useEffect, useState } from "react";

import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../../store/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const sessionUser = "";
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  if (sessionUser) navigate("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(signin(credential, password));
  };

  return (
    <>
      <h1>Log In</h1>
      <form  className="login" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label className="email"  >
          Email
          </label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        <label className="password" >
          Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
