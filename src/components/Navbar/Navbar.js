import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container-fluid">
        <Link class="navbar-brand mx-3 ms-5" to="/">
          UMBRELLA
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-5 my-3">
            <Link class="nav-link mx-3 nav-link-ltr" aria-current="page" to="/">
              Home
            </Link>
            <Link class="nav-link mx-3 nav-link-ltr" to="/">
              Pages
            </Link>
            <Link class="nav-link mx-3 nav-link-ltr" to="/">
              Store
            </Link>
            <Link class="nav-link mx-3 nav-link-ltr" to="/">
              Blog
            </Link>
            <Link class="nav-link mx-3 nav-link-ltr" to="/">
              Portfolio
            </Link>
            <Link class="nav-link mx-3 nav-link-ltr" to="/">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
