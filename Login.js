import React, { useState } from "react";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <LocalPrintshopIcon className="login__icon" />
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <p>E-mail</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email here..."
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password here..."
          />
          <button type="submit" className="login__signIn" onClick={logIn}>
            Login
          </button>
        </form>
        <p>
          By signing in you agree to Unsplashe's Terms and Conditions . Please
          see our Privacy Notice,our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button type="submit" className="login__register" onClick={register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
