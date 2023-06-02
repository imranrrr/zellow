import React, { useState } from "react";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (password === confirmPassword) {
    //   dispatch(signup(email, password));
    // }
    // return setErrors([
    //   "Confirm Password field must be the same as the Password field",
    // ]);
  };

  return (
    <div>
      <div className="signin__form" onSubmit={handleSubmit}>
        {/* <ul>
          {errors.map((error) => (
            <p className="error" key={error}>
              {error}
            </p>
          ))}
        </ul> */}
        <div className="email__container">
          <div className="email__container__label">
            <label className="email">Email</label>
          </div>
          <div className="email__container__textfield">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="password__container">
          <div className="password__container_label">
            <label>Password</label>
          </div>
          <div className="password__container_textfield">
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form__button__signin">
          <button type="submit">Sign In</button>
        </div>
        <div className="form__button__Forgetpassword">
          <a>Forget Your Password</a>
        </div>
        <div className="form__border__container"></div>
        <div style={{ marginTop: "0.5rem", textAlign: "center" }}>
          <span>or connected with:</span>
        </div>
        <div className="signin__form__social__button__container">
          <div className="signin__form__social__button__container__Apple">
            <button>
              <div style={{ display: "flex" }}>
                <div>
                  <AppleIcon />
                </div>
                <span style={{ marginLeft: "3rem", marginTop: "0.1rem" }}>
                  Continue with Apple
                </span>
              </div>
            </button>
          </div>
          <div className="signin__form__social__button__container__facebook">
            <button>
              <div style={{ display: "flex" }}>
                <div>
                  <FacebookIcon />
                </div>
                <span style={{ marginLeft: "3rem", marginTop: "0.1rem" }}>
                  Continue with Facebook
                </span>
              </div>
            </button>
          </div>
          <div className="signin__form__social__button__container__google">
            <button>
              <div style={{ display: "flex" }}>
                <div>
                  <GoogleIcon />
                </div>
                <span style={{ marginLeft: "3rem", marginTop: "0.1rem" }}>
                  Continue with Google
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
