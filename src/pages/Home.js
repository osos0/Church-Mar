import React from "react";
import Header from "../componants/Header";
import News from "../componants/News";
import Kodaslist from "../componants/Kodaslist";
import Meetinglist from "../componants/Meetinglist";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Kodaslist />
        <News />
        <Meetinglist />
      </div>
    </>
  );
};

export default Home;
