import "./CSS/globle.css";
import "./CSS/nav.css";
import "./CSS/home.css";
import "./CSS/aboutMe.css";
import "./CSS/projects.css";
import "./CSS/contact.css";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/about.js";
import Contact from "./components/contact.js";
import Home from "./components/home.js";
import Nav from "./components/nav.js";
import Projects from "./components/projects.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },
  {
    path: "about-me",
    element: (
      <div>
        <Nav />
        <About />
      </div>
    ),
  },
  {
    path: "projects",
    element: (
      <div>
        <Nav />
        <Projects />
      </div>
    ),
  },
  {
    path: "contact",
    element: (
      <div>
        <Nav />
        <Contact />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
