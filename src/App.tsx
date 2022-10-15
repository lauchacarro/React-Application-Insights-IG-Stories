import React from "react";
import "./App.css";
import { AppInsightsContextProvider } from "./tracking/AppInsightsContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import ButtonsPage from "./pages/ButtonsPage";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/buttons">
                Botones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stories">
                IG Stories
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
