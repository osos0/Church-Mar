import React from "react";
import Kodaslist from "../componants/Kodaslist";
import allkodas from "../data/Schedule/allkodaswitharray";
import Ashiah from "../componants/Ashiah";

const Kodas = () => {
  return (
    <>
      <div className="container allKodasat">
        <Kodaslist />
        <div>
          <h2 className="ConOfTitle">قداسات الأسبوع</h2>
          <div className="conOfTheWeek">
            {allkodas.map((ko, index) => {
              return (
                <div className="conOfTheday">
                  <h3>يوم {ko.day}</h3>
                  <div className="totalOfkodasat">
                    {ko.listkodas.map((once, ind) => {
                      return (
                        <div className="kodasChildoo">
                          <div className="kodastitleinweek">
                            : القداس {once.name}
                          </div>
                          <div className="d-flex">
                            <div> إلى :{once.end}</div>
                            <div> من :{once.start} </div>
                          </div>
                          {/* <div>كنيسه مارمرقس </div> */}
                          <div> مذبح :{once.mazbah} </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Ashiah />
      </div>
    </>
  );
};

export default Kodas;
