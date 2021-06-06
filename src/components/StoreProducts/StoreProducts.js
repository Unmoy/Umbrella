import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./StoreProducts.css";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";

const StoreProducts = ({ pd }) => {
  const {Title,price,products,image,id} = pd
  const history = useHistory();  
  const handleClick = () => {
    const url = `/orders/${id}`
    history.push(url)
}
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top product-img" src={image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">Price: $ {price}</p>
        <p className="card-text">Color: {products.color}</p>
        <Button className='order-btn' onClick={handleClick}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Button>
      </div>
    </div>
  );
};

export default StoreProducts;
