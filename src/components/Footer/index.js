import React from "react";
import "./index.css"; // Ensure you have the CSS file updated
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeetup } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-section">
          <div className="socials">
            <h1 className="mainheading">Leading the way in adventure</h1>
            <div>
              <a
                href="https://www.facebook.com/explorerscompanyindia"
                target="_blank"
              >
                <FaFacebookSquare style={{ width: "100%" }} />
              </a>
              <a
                href="https://www.instagram.com/explorers_company"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="https://x.com/explorerspvtltd" target="_blank">
                <FaXTwitter />
              </a>
              <a
                href="https://www.meetup.com/explorers_company/"
                target="_blank"
              >
                <FaMeetup />
              </a>
              <a
                href="https://www.linkedin.com/company/explorers-company/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="newsletter">
            <h3>Join Our Newsletter</h3>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your e-mail" />
              <button type="submit" style={{ color: "white" }}>
                <CiSearch />
              </button>
            </div>
            <div id="popup" className="popup"></div>
          </div>
        </div>
        <hr />
        <div className="middle-section">
          <div className="company-info">
            <img src="https://via.placeholder.com/150" alt="Travelo Logo" />
            <p>
              Travel plans are not really an instrument themselves but a
              delivery mechanism or strategy for mostly others
            </p>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <a href="tel:+913134566585">+913134566585</a>
            <a href="mailto:info@adventuretravels.com">
              info@adventuretravels.com
            </a>
            <a href="mailto:support@adventuretravels.com">
              support@adventuretravels.com
            </a>
          </div>
          <div className="company">
            <h4>Company</h4>
            <a href="/">About Us</a>
            <a href="/">Features</a>
            <a href="/">Careers</a>
          </div>
          <div className="resource">
            <h4>Resource</h4>
            <a href="/">Press Info</a>
            <a href="/">Customers</a>
            <a href="/">Reviews</a>
          </div>
        </div>
        <hr />
        <div className="bottom-section">
          <p>@2023 AdventureTravels | All Rights Reserved</p>

          <div className="payment-methods" style={{ gap: "10px" }}>
            <p>We Accept Payment:</p>
            <SiRazorpay />

            <FaPaypal />
            <FaAmazonPay />
          </div>
        </div>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
