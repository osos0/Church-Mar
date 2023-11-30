import React from "react";
import Header from "../componants/Header";
import News from "../componants/News";
import Kodaslist from "../componants/Kodaslist";
import Meetinglist from "../componants/Meetinglist";
// import Live from "../componants/Live";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        {/* <Live /> */}
        <Kodaslist />
        <News />
        <Meetinglist />
      </div>
    </>
  );
};

export default Home;
