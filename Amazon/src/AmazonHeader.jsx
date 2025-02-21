import React from "react";
import { Search, ShoppingCart, ChevronDown, MapPin } from "lucide-react";
import "./amazon-header.css";
import IndiaFlag from "./assets/IndiaFlag.svg";
const AmazonHeader = () => {
  return (
    <header className="amazon-header">
      <div className="header-container">
        <div className="delivery-section">
          <a href="/" className="amazon-logo">
            amazon<span>.in</span>
          </a>

          <div className="delivery-location">
            <MapPin size={18} className="delivery-location-icon" />
            <div>
              <div className="delivery-text">Deliver to Mumbai 400017</div>
              <div className="delivery-location-bold">Update location</div>
            </div>
          </div>
        </div>

        <div className="search-container">
          <div className="search-wrapper">
            <button className="category-dropdown">
              Mobiles & Accessories
              <ChevronDown size={16} />
            </button>
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="search-input"
            />
            <button className="search-button">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="right-section">
          <button className="language-selector">
            <img
              src={IndiaFlag}
              alt="Indian flag"
              className="language-flag"
              width={25}
            />
            EN
            <ChevronDown size={16} />
          </button>

          <div className="account-section hover-dropdown">
            <div>Hello, sign in</div>
            <div className="account-text-bold">
              Account & Lists
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="returns-section">
            <div>Returns</div>
            <div className="returns-text-bold">& Orders</div>
          </div>

          <a href="/cart" className="cart-link">
            <div className="cart-icon-wrapper">
              <ShoppingCart size={24} />
              <span className="cart-count">0</span>
            </div>
            <span className="cart-text">Cart</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default AmazonHeader;
