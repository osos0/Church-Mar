import React from "react";
import kodasPic from "../imgs/kodas2.webp";
import meeting from "../imgs/meeting.jpg";
import kodasSchadule from "../data/Schedule/Kodas";

const Live = () => {
  return (
    <>
      <div className="container LiveCon">
        <h2 className="ConOfTitle">الأن بالكنيسة</h2>

        <div className="conOfKodases">
          <h2 className="ConOfTitle">القدسات</h2>
          {kodasSchadule[new Date().getDay()].listofKodas.map((kod, index) => {
            return (
              <div className="row kodas" key={index}>
                <div className="col-lg-4 col-md-4 col-sm-12 kodasleft">
                  <div>
                    قداس
                    {kodasSchadule[new Date().getDay()].day}
                    {kod.name}
                  </div>
                  <div>
                    {kod.start}
                    ---
                    {kod.end}
                  </div>
                  <div>
                    مذبح
                    {kod.mazbah}
                  </div>
                  <div>3</div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 kodasright">
                  <div className="kodasrightPic">
                    <img src={kodasPic} alt="kodasPic" />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="row kodas">
            <div className="col-lg-4 col-md-4 col-sm-12 kodasleft">
              <div>
                قداس {kodasSchadule[5].day}
                {kodasSchadule[5].listofKodas[0].name}
              </div>
              <div>
                {kodasSchadule[5].listofKodas[0].start} ---
                {kodasSchadule[5].listofKodas[0].end}
              </div>
              <div>مذبح {kodasSchadule[5].listofKodas[0].mazbah}</div>
              <div>3</div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 kodasright">
              <div className="kodasrightPic">
                <img src={kodasPic} alt="kodasPic" />
              </div>
            </div>
          </div>
          {/* <div className="row kodas"> */}
          <div className="row kodasmini">
            {/* <div className="col-lg-4 col-md-4 col-sm-12 kodasleft"> */}
            <div className="col-lg-10 col-md-9 col-sm-12 kodasleftmini">
              <div>
                قداس {kodasSchadule[5].day}
                {kodasSchadule[5].listofKodas[1].name}
              </div>
              <div>
                {kodasSchadule[5].listofKodas[1].start} ---
                {kodasSchadule[5].listofKodas[1].end}
              </div>
              <div>مذبح {kodasSchadule[5].listofKodas[1].mazbah}</div>
              <div>3</div>
            </div>
            {/* <div className="col-lg-8 col-md-8 col-sm-12 kodasright"> */}
            <div className="col-lg-2 col-md-3 col-sm-12 kodasrightmini">
              <div className="kodasrightPic">
                <img src={kodasPic} alt="kodasPic" />
              </div>
            </div>
          </div>
        </div>
        <div className="conOfmeeting">
          <h2 className="ConOfTitle">الاجتماعات</h2>
          <div className="row meeting">
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
          <div className="row meeting">
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
      </div>
    </>
  );
};

export default Live;
