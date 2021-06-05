import React from "react";
import "./Store.css";
import StoreProducts from "../StoreProducts/StoreProducts";
import { useSelector } from "react-redux";

const Store = () => {
  const beddata = useSelector((state) => {
    return state.productList;
  });
  return (
    <div style={{ background: "#e7f3f1" }}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {beddata?.map((pd) => (
            <StoreProducts pd={pd}></StoreProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
