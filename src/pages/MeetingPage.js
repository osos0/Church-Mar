import React from "react";
import allMeeting, {
  MeetingByMeeting,
} from "../data/Schedule/allmeetingwitharray";
import Meetinglist from "../componants/Meetinglist";
import church006 from "../imgs/church-008.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const MeetingPage = () => {
  return (
    <>
      <div className="container allKodasat">
        <Meetinglist />
        {/* تفاصيل كل اجتماع */}
        <div className="container eachMeetingCon">
          <h2 className="ConOfTitle"> إجتماعات الكنيسة</h2>
          <div className="row eachMeetingCard">
            {MeetingByMeeting.map((mee, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 eachMeetingCardChild">
                  <div className="eachMeetingCardChildReal">
                    <div className="meetingPicCon">
                      <img src={church006} alt="newsPic" />
                    </div>
                    <div className="dateCon">
                      {/* <FontAwesomeIcon icon={faCalendarDay} /> */}
                      <div> 07:00 PM </div>
                      <div>{mee.day}</div>
                      <div> {mee.name}</div>
                    </div>
                    <div className="meetingTextAll">
                      الجدير بالذكر أن مجلس كنائس مصر تأسس عام 2013 كمؤسسة تجمع
                      فى عضويتها خمسة كنائس مصرية تمثل الطوائف المختلفة، الكنيسة
                      القبطية الأرثوذكسية، والكنيسة الإنجيلية، والكنيسة القبطية
                      الكاثوليكية، وكنيسة الروم الأرثوذكس والكنيسة الأسقفية، وهو
                      أول كيان يجمع الطوائف المصرية معا.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* إجتماعات الأسبوع */}
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
