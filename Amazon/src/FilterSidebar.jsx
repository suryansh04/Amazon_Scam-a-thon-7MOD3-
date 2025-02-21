// FilterSidebar.js
import React from "react";
import { ChevronLeft, Star } from "lucide-react";
import "./amazon-filter-sidebar.css";

const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      {/* Category Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Category</h3>
        <a href="/electronics" className="back-link">
          <ChevronLeft size={16} />
          Electronics
        </a>
        <ul className="filter-list">
          <li className="filter-item">
            <a href="#" className="filter-link">
              Mobiles & Accessories
            </a>
            <ul className="filter-list">
              <li className="filter-item">
                <a href="#" className="filter-link">
                  Mobile Accessories
                </a>
              </li>
              <li className="filter-item">
                <a href="#" className="filter-link">
                  Mobile Broadband Devices
                </a>
              </li>
              <li className="filter-item">
                <a href="#" className="filter-link">
                  SIM Cards
                </a>
              </li>
              <li className="filter-item">
                <a href="#" className="filter-link">
                  Smartphones & Basic Mobiles
                </a>
              </li>
              <li className="filter-item">
                <a href="#" className="filter-link">
                  Smartwatches
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Amazon Prime Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Amazon Prime</h3>
        <label className="checkbox-item">
          <input type="checkbox" className="checkbox-input" />
          <span className="prime-icon">✓prime</span>
        </label>
      </div>

      {/* Delivery Day Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Delivery Day</h3>
        <label className="checkbox-item">
          <input type="checkbox" className="checkbox-input" />
          Get It Today
        </label>
        <label className="checkbox-item">
          <input type="checkbox" className="checkbox-input" />
          Get It by Tomorrow
        </label>
      </div>

      {/* Brands Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Brands</h3>
        {[
          "Apple",
          "Samsung",
          "OnePlus",
          "boAt",
          "iQOO",
          "realme",
          "Redmi",
          "Vivo",
          "Nokia",
          "POCO",
        ].map((brand) => (
          <label key={brand} className="checkbox-item">
            <input type="checkbox" className="checkbox-input" />
            {brand}
          </label>
        ))}
      </div>

      {/* Customer Reviews Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Customer Reviews</h3>
        <a href="#" className="filter-link">
          <div className="star-rating">
            <Star size={16} fill="#FFA41C" />
            <Star size={16} fill="#FFA41C" />
            <Star size={16} fill="#FFA41C" />
            <Star size={16} fill="#FFA41C" />
            <Star size={16} /> & Up
          </div>
        </a>
      </div>

      {/* Item Condition Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Item Condition</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <a href="#" className="filter-link">
              New
            </a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link">
              Renewed
            </a>
          </li>
        </ul>
      </div>

      {/* Price Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Price</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <a href="#" className="price-link">
              Under ₹1,000
            </a>
          </li>
          <li className="filter-item">
            <a href="#" className="price-link">
              ₹1,000 - ₹5,000
            </a>
          </li>
          <li className="filter-item">
            <a href="#" className="price-link">
              ₹5,000 - ₹10,000
            </a>
          </li>
          <li className="filter-item">
            <a href="#" className="price-link">
              ₹10,000 - ₹20,000
            </a>
          </li>
          <li className="filter-item">
            <a href="#" className="price-link">
              Over ₹20,000
            </a>
          </li>
        </ul>
      </div>

      {/* Deals & Discounts Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Deals & Discounts</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <a href="#" className="filter-link">
              All Discounts
            </a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link">
              Today's Deals
            </a>
          </li>
        </ul>
      </div>

      {/* Made for Amazon Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Made for Amazon Brands</h3>
        <label className="checkbox-item">
          <input type="checkbox" className="checkbox-input" />
          Made for Amazon
        </label>
      </div>

      {/* Pay On Delivery Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Pay On Delivery</h3>
        <label className="checkbox-item">
          <input type="checkbox" className="checkbox-input" />
          Eligible for Pay On Delivery
        </label>
      </div>

      {/* New Arrivals Section */}
      <div className="filter-section">
        <h3 className="filter-heading">New Arrivals</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <a href="#" className="filter-link">
              Last 30 days
            </a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link">
              Last 90 days
            </a>
          </li>
        </ul>
      </div>

      {/* Discount Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Discount</h3>
        <ul className="filter-list">
          {[
            "10% Off or more",
            "25% Off or more",
            "35% Off or more",
            "50% Off or more",
            "60% Off or more",
            "70% Off or more",
          ].map((discount) => (
            <li key={discount} className="filter-item">
              <a href="#" className="filter-link">
                {discount}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Seller Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Seller</h3>
        {[
          "Cocoblu Retail",
          "Clicktech Retail Private Ltd",
          "TheGiftKart",
          "Fashionury",
          "Pikkme",
          "ImagineDesign",
          "Spigen India",
        ].map((seller) => (
          <label key={seller} className="checkbox-item">
            <input type="checkbox" className="checkbox-input" />
            {seller}
          </label>
        ))}
      </div>

      {/* Availability Section */}
      <div className="filter-section">
        <h3 className="filter-heading">Availability</h3>
        <label className="checkbox-item">
          <input type="checkbox" className="checkbox-input" />
          Include Out of Stock
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
