import React, { useState } from "react";

const Register = ({ clearMsg, setIsRegisterOpen, setIsLoginOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
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
    handleRegister(email, password);
  };
  const handleRegister = (email, password) => {
    const users = JSON.parse(localStorage.getItem("USER_DB")) || [];
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setRegisterError("Email Already Exist!!");
      return;
    }

    if (email.trim() === "" || password.trim() === "") {
      setRegisterError("Email and password cannot be null");
      return;
    }
    const newUser = {
      email: email,
      password: password,
    };

    users.push(newUser);
    localStorage.setItem("USER_DB", JSON.stringify(users));
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <main className="login-container">
      {registerError && (
        <p
          style={{
            width: "60vw",
            padding: "20px",
            fontSize: "1.3rem",
            background: "#FF2E2E",
            margin: "auto",
            color: "white",
            position: "absolute",
            top: "20px",
            left: "0",
            right: "0",
            zIndex: "1000",
          }}
        >
          {registerError}
        </p>
      )}
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
          <h2>Register</h2>
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

          <div id="button-con">
            <button type="submit">Register</button>
          </div>

          <a
            href="#"
            className="signup-link"
            onClick={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
          >
            Login
          </a>
        </form>
      </section>
    </main>
  );
};

export default Register;
