import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand mx-3 ms-5" to="/">
          UMBRELLA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-5 my-3">
            <Link
              className="nav-link mx-3 nav-link-ltr"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link mx-3 nav-link-ltr" to="/">
              Pages
            </Link>
            <Link className="nav-link mx-3 nav-link-ltr" to="/store">
              Store
            </Link>
            <Link className="nav-link mx-3 nav-link-ltr" to="/">
              Blog
            </Link>
            <Link className="nav-link mx-3 nav-link-ltr" to="/">
              Portfolio
            </Link>
            <Link className="nav-link mx-3 nav-link-ltr" to="/">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
