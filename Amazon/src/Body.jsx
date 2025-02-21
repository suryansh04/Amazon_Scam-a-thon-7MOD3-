import React from "react";
import { Sidebar } from "lucide-react";
import Banner from "./Banner";
import FilterSidebar from "./FilterSidebar";
import "./Body.css";
import ProductCard from "./ProductCard";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
const Body = () => {
  const products = [
    {
      title:
        "iPhone 16 Pro 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium",
      price: "1,22,900",
      originalPrice: "1,29,900",
      discount: 50,
      imageUrl: img1,
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: true,
    },
    {
      title: "MApple iPhone 15 (128 GB) - Blue",
      price: "61,499",
      originalPrice: "79,900",
      discount: 50,
      imageUrl: img2,
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: true,
    },
    {
      title:
        "Samsung Galaxy M35 5G (Thunder Grey,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display| Without Charger",
      price: "₹16,499",
      originalPrice: "25,999",
      discount: 50,
      imageUrl: img3,
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: true,
    },
    {
      title:
        "Samsung Galaxy A35 5G (Awesome Iceblue, 8GB RAM, 128GB Storage) | Premium Glass Back | 50 MP Main Camera (OIS) | Nightography | IP67 | Corning Gorilla Glass Victus+ | sAMOLED with Vision Booster",
      price: "25,999",
      originalPrice: "33,999",
      discount: 15,
      imageUrl: img4,
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: false,
    },
    {
      title:
        "Samsung Galaxy A35 5G (Awesome Iceblue, 8GB RAM, 128GB Storage) | Premium Glass Back | 50 MP Main Camera (OIS) | Nightography | IP67 | Corning Gorilla Glass Victus+ | sAMOLED with Vision Booster",
      price: "25,999",
      originalPrice: "33,999",
      discount: 15,
      imageUrl: img4,
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: false,
    },
    {
      title:
        "Samsung Galaxy A16 5G (Blue Black, 8GB RAM, 256GB Storage) | Super AMOLED | 50MP Triple Camera with Ultra Wide Lens | 6 OS & 6 Years Security Updates | IP54 | Tap & Pay | 5000mAh",

      price: "19,999",
      originalPrice: "24,499",
      discount: 50,
      imageUrl: img5,
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: true,
    },
    {
      title:
        "Redmi 13 5G, Orchid Pink, 6GB+128GB | India Debut SD 4 Gen 2 AE | 108MP Pro Grade Camera | 6.79in Largest Display in Segment",
      price: "12,210",
      originalPrice: "17,999",
      discount: 50,
      imageUrl: img5,
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: true,
    },
    {
      title:
        "Redmi A4 5G (Sparkle Purple, 4GB RAM, 64GB Storage) | Global Debut SD 4s Gen 2 | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging",
      price: "10,999",
      originalPrice: "8,299",
      discount: 50,
      imageUrl: img7,
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: true,
    },
  ];

  return (
    <div className="body-container">
      <div className="layout-container">
        <FilterSidebar />
        <div className="main-content">
          <Banner />
          <div className="products-grid-container">
            <div className="products-grid">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
