import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./StoreProducts.css";
const StoreProducts = ({ pd }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top product-img" src={pd.image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{pd.Title}</h5>
        <p className="card-text">Price: $ {pd.price}</p>
        <p className="card-text">Color: {pd.products.color}</p>
        <a href="/" className="order-btn">
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default StoreProducts;
