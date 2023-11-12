import React from "react";
import Header from "../componants/Header";
import Live from "../componants/Live";
import News from "../componants/News";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Live />
        <News />
      </div>
    </>
  );
};

export default Home;
