import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleEmailPasswordRegister, setUsers, handleNameCapture } =
    useAuth();

  const history = useHistory();

  const captureName = (e) => {
    setName(e.target.value);
  };
  const captureEmail = (e) => {
    setEmail(e.target.value);
  };
  const capturePassword = (e) => {
    setPassword(e.target.value);
  };

  console.log(name, email, password);
  const handleRegister = (e) => {
    e.preventDefault();
    handleEmailPasswordRegister(email, password, name)
      .then((result) => {
        handleNameCapture();
        console.log(result.user);
        setUsers(result.user);
        history.push("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form onSubmit={handleRegister}>
          <h2 className="active"> Register </h2>
          <input
            type="text"
            className="fadeIn second"
            placeholder="name"
            onBlur={captureName}
          />
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

          <button className="btn-regular">Register</button>
          <br />
          <Link to="/login" className="link-default">
            <p className="mb-2">
              <span className="ms-2">Already have account? Login</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
