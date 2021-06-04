import React from "react";
import Features from "../Features/Features";
import HomeBed from "../HomeBed/HomeBed";
import HomeChair from "../HomeChair/HomeChair";
import HomeMain from "../HomeMain/HomeMain";

const Home = () => {
  return (
    <div>
      <HomeMain></HomeMain>
      <HomeChair></HomeChair>
      <HomeBed></HomeBed>
      <Features></Features>
    </div>
  );
};

export default Home;
