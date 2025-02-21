// import { Sidebar } from "lucide-react";
// import React from "react";
// import Banner from "./Banner";
// import FilterSidebar from "./FilterSidebar";
// const Body = () => {
//   return (
//     <>
//       <body>
//         <div style={{ display: "flex" }}>
//           <FilterSidebar></FilterSidebar>
//           <div>
//             <Banner></Banner>
//             <h1>hello </h1>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// };

// export default Body;

import React from "react";
import { Sidebar } from "lucide-react";
import Banner from "./Banner";
import FilterSidebar from "./FilterSidebar";
import "./Body.css";
import ProductCard from "./ProductCard";
const Body = () => {
  const products = [
    {
      title: "Philips Avent Natural Response Bottle",
      price: "405.00",
      originalPrice: "499.00",
      discount: 21,
      imageUrl: "../src/assets/IndiaFlag.svg",
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: false,
    },
    {
      title: "Pigeon Peristaltic Nipple",
      price: "270.00",
      originalPrice: "299.00",
      discount: 10,
      imageUrl: "/api/placeholder/200/200",
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: false,
    },
    {
      title: "Mee Mee Anti-Bacterial Baby Liquid Cleanser",
      price: "195.00",
      originalPrice: "299.00",
      discount: 35,
      imageUrl: "/api/placeholder/200/200",
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: false,
    },
    {
      title: "Garnier Men, Moisturiser",
      price: "235.00",
      originalPrice: "299.00",
      discount: 21,
      imageUrl: "/api/placeholder/200/200",
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: true,
    },
    {
      title: "Listerine Fresh Burst Mouthwash",
      price: "420.00",
      originalPrice: "495.00",
      discount: 15,
      imageUrl: "/api/placeholder/200/200",
      isFreeDelivery: true,
      deliveryDate: "Sun, 23 Feb",
      limitedDeal: false,
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
