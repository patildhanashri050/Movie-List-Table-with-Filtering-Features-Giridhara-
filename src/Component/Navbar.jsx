import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between ">
      <NavLink to="/" className="navbar-brand text-light" style={{ textDecoration: "none" }}>
        Movie List 🎥🍿
      </NavLink>

      <div>
        <NavLink
          to="/"
          className="text-light mx-3"
          style={{ textDecoration: "none" }}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className="text-light"
          style={{ textDecoration: "none" }}
        >
          Movies
        </NavLink>
      </div>
    </nav>
  );
}
