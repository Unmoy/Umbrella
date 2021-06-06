import React from "react";
import "./Store.css";
import StoreProducts from "../StoreProducts/StoreProducts";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Store = () => {
  const bedData = useSelector((state) => {
    return state.productList;
  });
  return (
    <div style={{ background: "#e7f3f1" }}>
      <Navbar></Navbar>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {bedData?.map((pd) => (
            <StoreProducts key={pd.id} pd={pd}></StoreProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
