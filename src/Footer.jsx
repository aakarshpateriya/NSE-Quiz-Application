// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-about">
                    <h3>NFC Education</h3>
                    <p>
                        NFC Education is dedicated to providing quality educational resources to empower students. Join us in the journey of learning and growing!
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/classes">Classes</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: info@nfc-education.com</p>
                    <p>Phone: +91 9285292240 </p>
                    <p>Address: YS Stadium Nowgong 471201, India</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NFC Education. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
