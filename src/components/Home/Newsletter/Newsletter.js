import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-container">
      <div className="container">
        <div className="newsletter-text">
          <h4>STAY UP TO DATE</h4>
          <h2>JOIN OUR NEWSLETTER</h2>
        </div>
        <form class="input-group mb-3">
          <input
            type="text"
            class="form-control bg-transparent border-success text-field "
            placeholder="your email here*"
          />
          <button
            class="btn btn-outline-warning sub-btn"
            type="button"
            id="button-addon2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
