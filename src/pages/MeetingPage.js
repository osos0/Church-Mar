import React from "react";
// import Kodaslist from "../componants/Kodaslist";
import allMeeting from "../data/Schedule/allmeetingwitharray";
import Meetinglist from "../componants/Meetinglist";

const MeetingPage = () => {
  return (
    <>
      <div className="container allKodasat">
        <Meetinglist />
        <div>
          <h2 className="ConOfTitle">إجتماعات الأسبوع</h2>
          <div className="conOfTheWeek">
            {allMeeting.map((ko, index) => {
              return (
                <div className="conOfTheday">
                  <h3>يوم {ko.day}</h3>
                  <div className="totalOfkodasat">
                    {ko.listkodas.map((once, ind) => {
                      return (
                        <div className="kodasChildoo">
                          <div className="kodastitleinweek">
                            : إجتماع {once.name}
                          </div>
                          <div className="d-flex">
                            <div> إلى :{once.end}</div>
                            <div> من :{once.start} </div>
                          </div>
                          {/* <div>كنيسه مارمرقس </div> */}
                          <div> كنيسة :{once.mazbah} </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingPage;
