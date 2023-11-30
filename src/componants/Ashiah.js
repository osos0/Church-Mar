import React from "react";
import allashiah from "../data/Schedule/allashiah";

const Ashiah = () => {
  return (
    <>
      <div className="container allKodasat">
        <div>
          <h2 className="ConOfTitle">مواعيد العشيات و التسبحة</h2>
          <div className="conOfTheWeek">
            {allashiah.map((ashi, index) => {
              return (
                <div className="conOfTheday">
                  <h3>يوم {ashi.day}</h3>
                  <div className="totalOfkodasat">
                    {ashi.listkodas.map((once, ind) => {
                      return (
                        <div className="kodasChildoo">
                          <div className="kodastitleinweek">
                            : صلاة {once.name}
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

export default Ashiah;
