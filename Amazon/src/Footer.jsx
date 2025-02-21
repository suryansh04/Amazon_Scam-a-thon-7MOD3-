import React from "react";
import "./Footer.css";
import AmzFooter from "./assets/Amazon_Footer.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="back-to-top">
        <a href="#top">Back to top</a>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Sell under Amazon Accelerator</a>
            </li>
            <li>
              <a href="#">Protect and Build Your Brand</a>
            </li>
            <li>
              <a href="#">Amazon Global Selling</a>
            </li>
            <li>
              <a href="#">Supply to Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Fulfilment by Amazon</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Amazon Pay on Merchants</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Returns Centre</a>
            </li>
            <li>
              <a href="#">Recalls and Product Safety Alerts</a>
            </li>
            <li>
              <a href="#">100% Purchase Protection</a>
            </li>
            <li>
              <a href="#">Amazon App Download</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-secondary">
        <div className="amazon-logo">
          <img src={AmzFooter} alt="Amazon Logo" width={100} />
        </div>
        <div className="footer-buttons">
          <button className="language-button">
            <span className="globe-icon">🌐</span>
            English
          </button>
          <button className="country-button">
            <span className="flag-icon">🇮🇳</span>
            India
          </button>
        </div>
      </div>

      <div className="footer-services">
        <div className="services-grid">
          <div className="service-item">
            <a href="#">
              <span>AbeBooks</span>
              <span className="service-description">
                Books, art & collectibles
              </span>
            </a>
          </div>
          <div className="service-item">
            <a href="#">
              <span>Amazon Web Services</span>
              <span className="service-description">
                Scalable Cloud Computing Services
              </span>
            </a>
          </div>
          <div className="service-item">
            <a href="#">
              <span>Audible</span>
              <span className="service-description">Download Audio Books</span>
            </a>
          </div>
          <div className="service-item">
            <a href="#">
              <span>IMDb</span>
              <span className="service-description">
                Movies, TV & Celebrities
              </span>
            </a>
          </div>
          <div className="service-item">
            <a href="#">
              <span>Shopbop</span>
              <span className="service-description">
                Designer Fashion Brands
              </span>
            </a>
          </div>
          <div className="service-item">
            <a href="#">
              <span>Amazon Business</span>
              <span className="service-description">
                Everything For Your Business
              </span>
            </a>
          </div>
          <div className="service-item">
            <a href="#">
              <span>Prime Now</span>
              <span className="service-description">
                2-Hour Delivery on Everyday Items
              </span>
            </a>
          </div>
          <div className="service-item">
            <a href="#">
              <span>Amazon Prime Music</span>
              <span className="service-description">
                100 million songs, ad-free Over 15 million podcast episodes
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Conditions of Use & Sale</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <div className="footer-copyright">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;
