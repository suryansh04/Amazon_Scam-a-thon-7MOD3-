// AmazonCategoryNav.js
import React from "react";
import "./amazon-category-nav.css";

const AmazonCategoryNav = () => {
  const categories = [
    "Electronics",
    "Mobiles & Accessories",
    "Laptops & Accessories",
    "TV & Home Entertainment",
    "Audio",
    "Cameras",
    "Computer Peripherals",
    "Smart Technology",
    "Musical Instruments",
    "Office & Stationery",
  ];

  return (
    <nav className="category-nav">
      <div className="category-container">
        {categories.map((category, index) => (
          <a key={index} href="#" className="category-link">
            {category}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default AmazonCategoryNav;
