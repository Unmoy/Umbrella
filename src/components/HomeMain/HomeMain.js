import React from "react";
import Navbar from "../Navbar/Navbar";

import "./HomeMain.css";

const HomeMain = () => {
  return (
    <section style={{ height: "100vh", backgroundColor: "#ebf0f4" }}>
      <Navbar></Navbar>
      <div className="home-container">
        <div className="col-md-6 ">
          <div className="home-info mx-5">
            <h1>MINIMAL & SIMPLE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              harum magni! Ducimus maxime sapiente optio impedit at ut amet
              dignissimos.
            </p>
            <button class="btn1">GET SERVICE</button>
            <button class="btn2">READ MORE</button>
          </div>
        </div>
        <div className="col-md-6 home-image"></div>
      </div>
    </section>
  );
};

export default HomeMain;
