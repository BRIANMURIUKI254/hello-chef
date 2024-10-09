

import '../Styles/Footer.css'; // Import the CSS for styling
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
return (
<footer className="footer">
    <div className="footer-container">
    <div className="footer-section">
        <h3>About us</h3>
        <ul>
        <li><a href="#">Our plans</a></li>
        <li><a href="#">How it works</a></li>
        </ul>
    </div>

    <div className="footer-section">
        <h3>More info</h3>
        <ul>
        <li><a href="#">Sustainability</a></li>
        <li><a href="#">B Corp</a></li>
        <li><a href="#">Help center</a></li>
        </ul>
    </div>

    <div className="footer-section">
        <h3>Work With Us</h3>
        <ul>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Affiliate Program</a></li>
        </ul>
    </div>

    <div className="footer-section">
        <h3>Contact us</h3>
        <p>hello@hellochef.me</p>
        <p>04 825 44 00</p>
    </div>
    </div>

    <div className="newsletter">
    <h4>Subscribe to our newsletter</h4>
    <div className="newsletter-input">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
    </div>
    </div>

    <div className="social-reviews">
    <div className="google-reviews">
        <h4>See Our Google Reviews</h4>
        <div className="stars">
        <span>⭐⭐⭐⭐⭐</span>
        <span className="google-icon">G</span>
        </div>
    </div>

    <div className="social-icons">
        <h4>Follow us</h4>
        <div className="icons">
        <a href=""><FaFacebookF /></a>
        <a href=""><FaInstagram /></a>
        <a href=""><FaYoutube /></a>
        <a href=""><FaTiktok /></a>
        </div>
    </div>

    
</div>
    
<div classname="Copyright">
        
        <h3>Made with for UAE</h3>
<p>&copy; Copyright 2024 Hello Chef All rights reserved ·
Public Policies & Statements
<span>
        <a href=""> ·Public Policies & Statements</a>

</span>

</p>
</div>
</footer>
);
};

export default Footer;
