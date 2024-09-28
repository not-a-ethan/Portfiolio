import "./CSS/globle.css";
import "./CSS/nav.css";
import "./CSS/home.css";
import "./CSS/projects.css";

import "./CSS/skill.css";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/home.js";
import Nav from "./components/nav.js";
import Projects from "./components/projects.js";
import Support from "./components/support.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Nav currentPage="home" />
                <Home />
            </div>
        ),
    },
    {
        path: "projects",
        element: (
            <div>
                <Nav currentPage="projects" />
                <Projects />
            </div>
        ),
    },
    {
        path: "/support",
        element: (
            <div>
                <Nav currentPage="support" />
                <Support />
            </div>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
