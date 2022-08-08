import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// import ActionTypes from "../../../redux/constants";

// import { login } from "../../../api/auth";

import login_bg from "../../../images/login_bg.jpg";
import "./Login.css";
import { useLoginMutation } from "../../../features/auth/authApiSlice";
import { setCredentials } from "../../../features/auth/authSlice";
import FullScreenLoader from "../../Loader/FullScreenLoader/FullScreenLoader";

export const Login = () => {
  const errorRef = useRef();
  const usernameRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setErrorMessage("");
  // }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...userData, username }));
      navigate("/");

      setUsername("");
      setPassword("");
    } catch (error) {
      if (!error?.originalStatus) {
        setErrorMessage("No Server Response");
      } else if (error.originalStatus === 400) {
        setErrorMessage("Missing Username or Password");
      } else if (error.originalStatus === 401) {
        setErrorMessage("Either Your Password or Username is incorrect");
      } else {
        setErrorMessage("Login Failed");
      }
      errorRef.current.focus();

      setUsername("");
      setPassword("");
    }
  };

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  document.title = "Sign In | Div.co Human Resource Management System";

  const returnLogin = () => {
    return (
      <>
        <div className="Login image-overlay"></div>
        <div className="Login container">
          <div className="card">
            <div className="image-side">
              <img src={login_bg} alt="" />
              <div className="image-overlay"></div>
            </div>
            <div className="login">
              <h1>Admin</h1>
              <h2>Login</h2>

              {errorMessage ? (
                <p className="error-message" ref={errorRef}>
                  {errorMessage}
                </p>
              ) : (
                <p ref={errorRef}></p>
              )}

              <form onSubmit={handleSubmit}>
                <div className="username">
                  <label htmlFor="username"></label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    // required
                    onChange={handleUsernameInput}
                    ref={usernameRef}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    // required
                    onChange={handlePasswordInput}
                  />
                </div>
                <p>
                  <a href="/">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    Trust this device
                  </a>
                </p>
                <input type="submit" value="LOGIN" />
                <p></p>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  return isLoading ? <FullScreenLoader /> : returnLogin();
};
