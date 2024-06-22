import React from 'react';
import './index.css'; // Import CSS file for styling

const ContactBanner = () => {
  return (
    <div className="banner">
      <div className="background-animation"></div>
      <div className="background-layer"></div>
      <div className="banner-content">
        <h1 className="banner-title">Contact Us for Your Dream Adventure</h1>
        <p className="banner-subtitle">Have questions or ready to book your trip?</p>
        <a href="mailto:sales@explorerscompany.in" className="contact-button">Contact Us</a>
      </div>
    </div>
  );
};

export default ContactBanner;
