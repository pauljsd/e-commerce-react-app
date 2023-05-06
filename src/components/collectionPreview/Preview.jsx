import React from "react";
import Items from "../collection-items/Items";

import "./preview.scss";

const Preview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <Items key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Preview;
