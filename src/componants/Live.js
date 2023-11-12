import React from "react";
import kodasPic from "../imgs/kodas2.webp";
import meeting from "../imgs/meeting.jpg";

const Live = () => {
  return (
    <>
      <div className="container LiveCon">
        <h2 className="ConOfTitle"> الأن بالكنيسة</h2>

        <div className="row kodas">
          <div className="col-lg-4 col-md-4 col-sm-12 kodasleft">
            <div>قداس الجمعة الاول</div>
            <div>06 : 00 AM --- 08:00 AM </div>
            <div>مذبح مارمرقس</div>
            <div>3</div>
            <div>3</div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 kodasright">
            <div className="kodasrightPic">
              <img src={kodasPic} alt="kodasPic" />
            </div>
          </div>
        </div>
        <div className="row kodas">
          <div className="col-lg-8 col-md-8 col-sm-12 kodasright ">
            <div className="kodasrightPic">
              <img src={meeting} alt="kodasPic" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 kodasleft">
            <div>الأجتماع العام</div>
            <div>07 : 00 PM --- 08:00 PM </div>
            <div>كنيسة مارمرقس</div>
            <div>3</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
