import React from "react";
import Features from "../Features/Features";
import HomeBed from "../HomeBed/HomeBed";
import Footer from "../Footer/Footer";
import HomeChair from "../HomeChair/HomeChair";
import HomeMain from "../HomeMain/HomeMain";
import Inspiration from "../Inspiration/Inspiration";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <HomeMain></HomeMain>
      <HomeChair></HomeChair>
      <HomeBed></HomeBed>
      <Features></Features>
      <Inspiration></Inspiration>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
