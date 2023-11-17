import { useState } from "react";
import "../styles/login.css";

export default function Login({
  validateUserHandler,
  clearMsg,
  setIsRegisterOpen,
  setIsLoginOpen,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
    clearMsg();
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
    clearMsg();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    validateUserHandler(email, password);
  };

  return (
    <main className="login-container">
      <section className="left container">
        <img
          className="image"
          src={process.env.PUBLIC_URL + "/undraw_team_up_re_84ok.svg"}
          alt=""
        />
      </section>
      <section className="right container">
        <form
          onSubmit={(event) => submitHandler(event)}
          id="login-form"
          action="#"
        >
          <h2>Sign In</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={changeEmailHandler}
              type="email"
              id="email"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={changePasswordHandler}
              type="password"
              id="password"
              value={password}
            />
          </div>
          <div id="remember-me-con">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div id="button-con">
            <button type="submit">Login</button>
          </div>
          <a href="#" className="forgot-password">
            Forgot password
          </a>
          <a
            href="#"
            className="signup-link"
            onClick={() => {
              setIsRegisterOpen(true);
              setIsLoginOpen(false);
            }}
          >
            Sign Up
          </a>
        </form>
      </section>
    </main>
  );
}
