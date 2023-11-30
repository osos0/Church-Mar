import React, { useEffect, useState } from "react";
import meeting from "../imgs/meeting.jpg";
import meetingSchadule from "../data/Schedule/Meeting";

const Meetinglist = () => {
  const [timenow, setTimenow] = useState("");

  useEffect(() => {
    setTimenow({
      nowday: parseInt(new Date().getDay()),
      nowHours: parseInt(new Date().getHours()),
      nowMins: parseInt(new Date().getMinutes()),
    });
  }, []);

  return (
    <div className=" LiveCon">
      <div className="conOfKodases">
        <h2 className="ConOfTitle">إجتماعات اليوم</h2>
        {meetingSchadule[new Date().getDay()].listkodas.map((kod, index) => {
          const isActive =
            (timenow.nowHours > parseInt(kod.start.slice(0, 2)) &&
              timenow.nowHours < parseInt(kod.end.slice(0, 2))) ||
            (timenow.nowHours === parseInt(kod.start.slice(0, 2)) &&
              timenow.nowMins >= parseInt(kod.start.slice(3, 5))) ||
            (timenow.nowHours === parseInt(kod.end.slice(0, 2)) &&
              timenow.nowMins <= parseInt(kod.end.slice(3, 5)));

          const rowClassName = isActive ? false : true;

          return (
            <div
              className={rowClassName ? `row kodasmini` : `row kodas`}
              key={index}
            >
              <div
                className={
                  rowClassName
                    ? `col-lg-10 col-md-9 col-sm-12 kodasleftmini`
                    : `col-lg-4 col-md-4 col-sm-12 kodasleft`
                }
              >
                <div>
                  أجتماع
                  {meetingSchadule[new Date().getDay()].day}
                  {kod.name}
                </div>
                <div>
                  {kod.start}
                  --
                  {kod.end}
                </div>
                <div>
                  كنيسة
                  {kod.mazbah}
                </div>
                <div>
                  {rowClassName ? (
                    `ليس الأن`
                  ) : (
                    <div className="stopAndlive">
                      <div className="stopAndliveChild1"></div>
                      <div className="stopAndliveChild2">الأن</div>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  rowClassName
                    ? `col-lg-2 col-md-3 col-sm-12 kodasrightmini`
                    : `col-lg-8 col-md-8 col-sm-12 kodasright`
                }
              >
                <div className="kodasrightPic">
                  <img src={meeting} alt="kodasPic" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meetinglist;
