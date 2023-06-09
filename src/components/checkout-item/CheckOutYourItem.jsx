import React from "react";

import "./checkoutitem.scss";

const CheckOutYourItem = ({
  cartItem: { name, imageUrl, price, quantity },
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quality">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckOutYourItem;
