import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn, setUsers, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  function handleGoogleSignIn() {
    googleSignIn()
      .then((result) => {
        setUsers(result.user);
        history.push(location.state?.from || "/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div
      className="loginWrapper"
      style={{ marginBottom: "57vh", marginTop: "20vh" }}
    >
      <div id="formContent">
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
      </div>
    </div>
  );
};

export default Login;
