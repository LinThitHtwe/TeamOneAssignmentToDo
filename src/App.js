import logo from "./logo.svg";
import "./App.css";
import Factorial from "./pages/Factorial";
import ToDo from "./pages/ToDo";
import EvenOdd from './pages/EvenOdd';
import Navbar from "./components/Navbar";
import { useState } from "react";


function App() {
  const [activeComponent, setActiveComponent] = useState("ToDo");

  const handleNavbarClick = (component) => {
    setActiveComponent(component);
  };

  return (

    

    <>
      <Navbar
        onNavbarClick={handleNavbarClick}
        activeComponent={activeComponent}
      />
      {activeComponent === "ToDo" && <ToDo />}
      {activeComponent === "Factorial" && <Factorial />}
       {activeComponent === "EvenOdd" &&   <EvenOdd/>}
    </>
  );
  
}

export default App;
