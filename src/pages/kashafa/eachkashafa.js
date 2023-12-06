import { useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";
import seascout from "../../imgs/sea-scout.jpg";
import kshafahobject from "../../data/sundayschool/sundayschool";

const Eachkashafa = () => {
  const [optionOfKind, setOptionOfKind] = useState(0);
  const params = useParams();
  return (
    <>
      <div className="container eachclass">
        <h2 className="ConOfTitle">الكشافة</h2>
        <div className="row conofclassofsunday">
          <div className="col-lg-6 col-md-6 col-sm-12  imgConOfPrimary ">
            <img src={seascout} alt="primary" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 ConOfPrimaryBoxfirst ">
            <div>
              {/* <h3>المرحلة</h3> */}
              <h3> {kshafahobject.kshafah[params.class].name}</h3>
              {params.class !== "babyclass" && (
                <select
                  onChange={(e) => {
                    setOptionOfKind(
                      parseInt(e.target.options[e.target.selectedIndex].value)
                    );
                  }}
                >
                  {/* {kshafahobject.sunchoodate[params.class].grads.map( */}
                  {kshafahobject.kshafah[params.class].grads.map(
                    (clas, index) => {
                      return clas;
                    }
                  )}
                </select>
              )}
            </div>
          </div>
        </div>
        <div className="row conofclassofsunday ">
          <div className="col-lg-4 col-md-4 col-sm-12 ConOfPrimaryBox">
            <div>
              <h3>مكان الخدمة</h3>
              <div>
                {" "}
                {kshafahobject.kshafah[params.class].place[optionOfKind]}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ConOfPrimaryBox">
            <div>
              <h3>الوقت</h3>
              <div>
                إلى {kshafahobject.kshafah[params.class].end}
                {kshafahobject.kshafah[params.class].start} من
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ConOfPrimaryBox">
            <h3>اليوم</h3>
            <div> {kshafahobject.kshafah[params.class].day}</div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 ConOfPrimaryBox">
            <div>
              <h3> تنبيهات الأسبوع</h3>
              <div>
                {kshafahobject.kshafah[params.class].note[optionOfKind]}
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 ConOfPrimaryBox">
            <div>
              <h3>أمين الخدمة</h3>
              <div>{kshafahobject.kshafah[params.class].aminkhmah}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eachkashafa;
