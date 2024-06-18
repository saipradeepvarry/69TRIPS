import React from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./index.css"; // Import your CSS file

function ContactPopup({ closePopup }) {
  return (
    <div className="ContactPopupContainer">
      <div className="BackgroundOverlay" onClick={closePopup} />
      <div className="PopupContainer">
        <div className="PopupHeader">
          <h3 style={{ margin: 0, fontSize: "25px" }}>Contact Us</h3>
          <button className="CloseButton" onClick={closePopup}>
            &times;
          </button>
        </div>
        <div className="ContactList">
          <a
            className="ContactItem"
            href="https://wa.me/+917997930250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            className="ContactItem"
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a className="ContactItem" href="tel:+917997930250">
            <FaPhoneAlt /> Call Now
          </a>
          <a className="ContactItem" href="mailto:your-email">
            <FaEnvelope /> Request Callback
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
