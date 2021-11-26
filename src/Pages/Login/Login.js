import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { googleSignIn, setUsers, handleLogin, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  function handleGoogleSignIn() {
    googleSignIn()
      .then((result) => {
        setUsers(result.user);
        history.push(location.state?.from || "/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleEmailLogin(e) {
    setIsLoading(true);
    e.preventDefault();
    handleLogin(email, password)
      .then((result) => {
        console.log(result);
        setUsers(result.user);
        history.push(location.state?.from || "/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const captureEmail = (e) => {
    setEmail(e.target.value);
  };
  const capturePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="wrapper fadeInDown mb-6rem">
      <div id="formContent">
        <form onSubmit={handleEmailLogin}>
          <h2 className="active"> Log In </h2>
          <input
            type="email"
            className="fadeIn second"
            placeholder="email"
            onBlur={captureEmail}
          />
          <input
            type="password"
            className="fadeIn second"
            placeholder="password"
            onBlur={capturePassword}
          />
          <br />

          <div
            className="d-flex rounded bg-light justify-content-center p-2 w-50 mx-auto align-items-center"
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt=""
            />
            <span className="ms-2" onClick={handleGoogleSignIn}>
              Login with google
            </span>
          </div>
          <br />
          <button className="btn-regular">LOG IN</button>
          <br />
          <Link to="/register" className="link-default">
            <p className="mb-2">
              <span className="ms-2">Don't have account? Register</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
