import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="main-content">
      <div class="left box">
        <h2>About us</h2>
        <hr />
        <div class="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            corrupti aliquid praesentium et culpa non cupiditate, provident sed?
            Eaque fugit pariatur distinctio nam animi. Delectus.
          </p>
          <div class="social">
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </div>
        </div>
      </div>
      <div class="center box">
        <h2>Address</h2>
        <hr />
        <div class="content">
          <div class="place">
            <span class="fas fa-map-marker-alt"></span>
            <span class="text">Chittagong,Bangladesh</span>
          </div>
          <div class="phone">
            <span class="fas fa-phone-alt"></span>
            <span class="text">+008-0167646809</span>
          </div>
          <div class="email">
            <span class="fas fa-envelope"></span>
            <span class="text">u_biswas@aol.com</span>
          </div>
        </div>
      </div>
      <div class="right box">
        <h2>Contact us</h2>
        <hr />
        <div class="content">
          <form>
            <div class="email">
              <h2>Email:</h2>
              <input type="email" />
            </div>
            <div class="messege">
              <div class="text">Message:</div>
              <input type="text-area" />
            </div>
            <div class="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
