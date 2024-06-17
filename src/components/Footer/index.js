import React from "react";
import "./index.css"; // Ensure you have the CSS file updated
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
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
            <h1 className="mainheading">Leading the Way in Travel Adventures</h1>
            <div>
              <a
                href="https://www.facebook.com/69trips"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare style={{ width: "100%" }} />
              </a>
              <a
                href="https://www.instagram.com/69trips"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/69trips"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.meetup.com/69trips"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMeetup />
              </a>
              <a
                href="https://www.linkedin.com/company/69trips"
                target="_blank"
                rel="noopener noreferrer"
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
            <img src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1718641137/WhatsApp_Image_2024-06-08_at_6.07.14_PM_nbokcg.jpg" alt="69 Trips Logo" />
            <p>
              At 69 Trips, we are dedicated to providing exceptional travel
              experiences. From adventure tours to luxury getaways, we ensure
              every journey is memorable and tailored to your preferences.
            </p>
          </div>
          <div className="contact">
            <h2 className="mainheading-text">Contact</h2>
            <a href="tel:+911234567890">+91 123 456 7890</a>
            <a href="mailto:info@69trips.com">info@69trips.com</a>
            <a href="mailto:support@69trips.com">support@69trips.com</a>
          </div>
          <div className="company">
            <h2 className="mainheading-text">Company</h2>
            <a href="/about">About Us</a>
            <a href="/features">Features</a>
            <a href="/careers">Careers</a>
          </div>
          <div className="resource">
            <h2 className="mainheading-text">Resources</h2>
            <a href="/press">Press Info</a>
            <a href="/customers">Customers</a>
            <a href="/reviews">Reviews</a>
          </div>
        </div>
        <hr />
        <div className="bottom-section">
          <p>@2024 69 Trips | All Rights Reserved</p>
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
