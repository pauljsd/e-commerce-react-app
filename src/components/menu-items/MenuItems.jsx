import React from "react";
import "./menuitems.scss";

const MenuItems = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size}, menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtiltle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItems;
