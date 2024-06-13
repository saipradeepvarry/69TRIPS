import React from 'react';
import './index.css'; // Ensure you have the CSS file updated

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="top-section">
                    <div className="socials">
                        <h1 className='mainheading'>Leading the way in adventure</h1>
                        <div>
                            <a href="#" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-instagram" style={{ color: '#007bff' }}></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-twitter" style={{ color: '#007bff' }}></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-youtube" style={{ color: '#007bff' }}></i>
                            </a>
                        </div>
                    </div>
                    <div className="newsletter">
                        <h3>Join Our Newsletter</h3>
                        <div className="newsletter-input">
                            <input type="email" placeholder="Enter your e-mail" />
                            <button type="submit">
                                <img src="https://via.placeholder.com/150" alt="Submit Icon" />
                            </button>
                        </div>
                        <div id="popup" className="popup"></div>
                    </div>
                </div>
                <hr />
                <div className="middle-section">
                    <div className="company-info">
                        <img src="https://via.placeholder.com/150" alt="Travelo Logo" />
                        <p>Travel plans are not really an instrument themselves but a delivery mechanism or strategy for mostly others</p>
                    </div>
                    <div className="contact">
                        <h4>Contact</h4>
                        <a href="tel:+913134566585">+913134566585</a>
                        <a href="mailto:info@adventuretravels.com">info@adventuretravels.com</a>
                        <a href="mailto:support@adventuretravels.com">support@adventuretravels.com</a>
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
                    <div className="payment-methods">
                        <p>We Accept Payment:</p>
                        <img src="https://via.placeholder.com/100" alt="Stripe Logo" />
                        <img src="https://via.placeholder.com/100" alt="Paypal Logo" />
                        <img src="https://via.placeholder.com/100" alt="Payoneer Logo" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
