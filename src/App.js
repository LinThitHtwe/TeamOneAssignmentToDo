import "./App.css";
import Login from "./pages/Login";
import Factorial from "./pages/Factorial";
import ToDo from "./pages/ToDo";
import EvenOdd from "./pages/EvenOdd";
import { useState } from "react";
import Register from "./pages/Register";
import Layout from "./Layout";
import NavbarLayout from "./NavbarLayout";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to={"/login"} />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/home",
      element: <NavbarLayout />,
      children: [
        {
          path: "/home/todo",
          element: <ToDo />,
        },
        {
          path: "/home/even-odd",
          element: <EvenOdd />,
        },
        {
          path: "/home/factorial",
          element: <Factorial />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
