import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom";
import "../style/Footer.css";
import insta from "../assets/insta.png"
import youtube from "../assets/youtube.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>LUMEN</h2>

          <p>
            Minimal living for a brighter tomorrow.
            <br />
            Thoughtful products for your home,
            <br />
            wardrobe and everyday life.
          </p>

          <div className="social-icons">
            <a href="#"><img className="insta" src={insta}alt="" /></a>
            <a href="#">f</a>
            <a href="#"><img className="youtube" src={youtube} alt="" /></a>
            <a href="#">p</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-column">
          <h3>Client Care</h3>

          <Link to="/faq">FAQs</Link>
          <Link to="/shipping">Shipping & Returns</Link>
          <Link to="/size-guide">Size Guide</Link>
          <Link to="/track-order">Track Order</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-circle">
          <h3>Luminary Circle</h3>
          <p>
            Exclusive access. Special offers.
            <br />
            A more conscious lifestyle.
          </p>

          <div className="join-form">
            <input
              type="email"
              placeholder="Enter your email address"
            />
            <button>
              Join Now →
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2025 LUMEN. All rights reserved.
        </p>

        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookies</Link>
        </div>

      </div>

    </footer>
  );
}

export default Footer;