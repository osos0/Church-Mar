import React, { useEffect, useState } from "react";
import kodasPic from "../imgs/kodas2.webp";
import meeting from "../imgs/meeting.jpg";
import kodasSchadule from "../data/Schedule/Kodas";
import meetingSchadule from "../data/Schedule/Meeting";

const Live = () => {
  const [timeOfkodas, setTimeOfkodas] = useState("");
  const [timenow, setTimenow] = useState("");
  const [condtion, setCondtion] = useState(`red`);
  // const [realcondtion, setRealcondtion] = useState(`red`);

  // pring the time now
  useEffect(() => {
    setTimenow({
      nowday: parseInt(new Date().getDay()),
      nowHours: parseInt(new Date().getHours()),
      nowMins: parseInt(new Date().getMinutes()),
    });

    // pring the kodas time
    setTimeOfkodas({
      daykod: kodasSchadule[parseInt(new Date().getDay())].id,
      startHours: parseInt(
        kodasSchadule[new Date().getDay()].listkodas[0].start.slice(0, 2)
      ),
      startMins: parseInt(
        kodasSchadule[new Date().getDay()].listkodas[0].start.slice(3, 5)
      ),
      endHours: parseInt(
        kodasSchadule[new Date().getDay()].listkodas[0].end.slice(0, 2)
      ),
      endMins: parseInt(
        kodasSchadule[new Date().getDay()].listkodas[0].end.slice(3, 5)
      ),
    });
  }, []);

  // set a condtion for change the background between green and red
  useEffect(() => {
    const isEventActive =
      timenow.nowday === timeOfkodas.daykod &&
      ((timenow.nowHours > timeOfkodas.startHours &&
        timenow.nowHours < timeOfkodas.endHours) ||
        (timenow.nowHours === timeOfkodas.startHours &&
          timenow.nowMins >= timeOfkodas.startMins) ||
        (timenow.nowHours === timeOfkodas.endHours &&
          timenow.nowMins <= timeOfkodas.endMins));

    if (isEventActive) {
      setCondtion(`green`);
    } else if (!isEventActive) {
      setCondtion(`red`);
    }
  }, [timenow, timeOfkodas]);

  return (
    <>
      <div className="container LiveCon">
        <h2 className="ConOfTitle">الأن بالكنيسة</h2>
        {/*  */}
        <h3>Day kodas:{timeOfkodas.daykod}</h3>
        <h3>
          startHours:{timeOfkodas.startHours} : {timeOfkodas.startMins}
        </h3>
        <hr />
        <h3>Day :{timenow.nowday}</h3>
        <h3>
          now :{timenow.nowHours} : {timenow.nowMins}
        </h3>
        <hr />
        <h3>
          endHours :{timeOfkodas.endHours} : {timeOfkodas.endMins}
        </h3>
        {condtion}
        <div className="conOfKodases">
          <h2 className="ConOfTitle">القدسات</h2>
          {kodasSchadule[new Date().getDay()].listkodas.map((kod, index) => {
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
                    قداس
                    {kodasSchadule[new Date().getDay()].day}
                    {kod.name}
                  </div>
                  <div>
                    {kod.start}
                    --
                    {kod.end}
                  </div>
                  <div>
                    مذبح
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
                    <img src={kodasPic} alt="kodasPic" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="conOfKodases">
          <h2 className="ConOfTitle">الاجتماعات</h2>
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
    </>
  );
};

export default Live;

// {kodasSchadule[new Date().getDay()].listkodas.map((kod, index) => {
//   return (
//     <div
//       className={condtion === `red` ? `row kodasmini` : `row kodas`}
//       key={index}
//     >
//       <div
//         className={
//           condtion === `red`
//             ? `col-lg-10 col-md-9 col-sm-12 kodasleftmini`
//             : `col-lg-4 col-md-4 col-sm-12 kodasleft`
//         }
//       >
//         <div>
//           قداس
//           {kodasSchadule[new Date().getDay()].day}
//           {kod.name}
//         </div>
//         <div>
//           {kod.start}
//           ---
//           {kod.end}
//         </div>
//         <div>
//           مذبح
//           {kod.mazbah}
//         </div>
//         <div>
//           {condtion === `red` ? `انتهى` : `الأن`} {condtion}
//         </div>
//       </div>
//       <div
//         className={
//           condtion === `red`
//             ? `col-lg-2 col-md-3 col-sm-12 kodasrightmini`
//             : `col-lg-8 col-md-8 col-sm-12 kodasright`
//         }
//       >
//         <div className="kodasrightPic">
//           <img src={kodasPic} alt="kodasPic" />
//         </div>
//       </div>
//     </div>
//   );
// })}

/////////////////////////////////////////////////////////
