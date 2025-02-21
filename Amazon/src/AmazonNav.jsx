// AmazonNav.js
import React from "react";
import { Menu, ChevronDown } from "lucide-react";
import "./amazon-nav.css";

const AmazonNav = () => {
  return (
    <nav className="amazon-nav">
      <div className="nav-container">
        <button className="nav-item all-menu-button">
          <Menu size={20} />
          All
        </button>

        <div className="nav-items">
          <button className="nav-item">
            Fresh
            <ChevronDown size={16} className="dropdown-icon" />
          </button>

          <button className="nav-item">
            Amazon Business
            <ChevronDown size={16} className="dropdown-icon" />
          </button>

          <button className="nav-item">Buy Again</button>
          <button className="nav-item">Today's Deals</button>
          <button className="nav-item">MX Player</button>
          <button className="nav-item">Sell</button>
          <button className="nav-item">Gift Cards</button>
          <button className="nav-item">Customer Service</button>
          <button className="nav-item">Gift Ideas</button>

          <button className="nav-item">
            Browsing History
            <ChevronDown size={16} className="dropdown-icon" />
          </button>

          <button className="nav-item">AmazonBasics</button>
          <button className="nav-item">Amazon Pay</button>
          <button className="nav-item">Home Improvement</button>
        </div>
      </div>
    </nav>
  );
};

export default AmazonNav;
