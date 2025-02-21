import React from "react";

const ProductCard = ({
  title,
  price,
  originalPrice,
  discount,
  imageUrl,
  isFreeDelivery,
  deliveryDate,
  limitedDeal,
}) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={title} className="product-image" />
        {limitedDeal && (
          <span className="limited-deal-badge">Limited time deal</span>
        )}
      </div>
      <h3 className="product-title">{title}</h3>
      <div className="price-container">
        <span className="current-price">₹{price}</span>
        {originalPrice && (
          <span className="original-price">₹{originalPrice}</span>
        )}
        {discount && <span className="discount">-{discount}%</span>}
      </div>
      {isFreeDelivery && (
        <p className="delivery-info">FREE delivery {deliveryDate}</p>
      )}
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
};

export default ProductCard;
