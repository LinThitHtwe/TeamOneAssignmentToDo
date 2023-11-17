import "./App.css";
import Login from "./pages/Login";
import Factorial from "./pages/Factorial";
import ToDo from "./pages/ToDo";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  localStorage.setItem(
    "USER_DB",
    JSON.stringify([
      {
        email: "mario@gmail.com",
        password: "mario",
      },
      {
        email: "onigiri@gmail.com",
        password: "onigiri",
      },
      {
        email: "bunbun@gmail.com",
        password: "bunbun",
      },
    ])
  );

  const [isValid, setValid] = useState(null);

  const validateUserHandler = (email, password) => {
    const users = JSON.parse(localStorage.getItem("USER_DB"));
    let isValided = false;

    users.forEach((user) => {
      if (user.email === email && user.password === password) {
        isValided = true;
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ email: user.email, password: user.password })
        );
        return;
      }
    });

    if (isValided) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const clearMsg = () => {
    setValid(null);
  };

  const [activeComponent, setActiveComponent] = useState("ToDo");

  const handleNavbarClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      {!isValid && (
        <Login validateUserHandler={validateUserHandler} clearMsg={clearMsg} />
      )}
      {isValid === false && (
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
          Invalid email or password
        </p>
      )}
      <Navbar
        onNavbarClick={handleNavbarClick}
        activeComponent={activeComponent}
      />
      {activeComponent === "ToDo" && <ToDo />}
      {activeComponent === "Factorial" && <Factorial />}
    </>
  );
}

export default App;
