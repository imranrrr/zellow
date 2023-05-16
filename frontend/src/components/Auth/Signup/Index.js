import React, { useState } from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { signup } from "../../../store/auth/auth.actions";

function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(signup(email, password));
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <>
      <h2 className="header">Welcome to Zillion</h2>
      <form  className="signup__form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => (
            <p className="error" key={error}>
              {error}
            </p>
          ))}
        </ul>
        <label  className="email" >
          Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label  className="emailpassword" >
          Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        <label  className="confirmpassword" >
          Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default Signup;
