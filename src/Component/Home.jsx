import React from "react";
import { NavLink } from "react-router-dom";
import '../Home.css';

export default function Home() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-container text-center">

      <h1 className="mb-3 fw-bold text-light">Welcome to Movie List 🎥🍿</h1>

      <p className="text-light mb-4">
        Manage and explore your favourite movies in one place.
      </p>

      <NavLink to="/movies" className="btn btn-dark btn-lg mb-4">
        Go to Movies →
      </NavLink>

  
      <div className="features bg-dark text-light p-4 rounded" style={{maxWidth: "450px"}}>
        <h4 className="mb-3">✨ Features</h4>
        <ul className="text-start">
          <li>Add your favourite movies</li>
          <li>View movie details easily</li>
          <li>Organize and manage your list</li>
          <li>Simple and clean UI</li>
        </ul>
      </div>

      <p className="mt-4 text-light" style={{fontSize:"14px"}}>
        Made with ❤️ using React
      </p>
    </div>
  );
}
