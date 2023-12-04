import React from "react";
import cross2 from "../../imgs/cross2.png";
import { Link } from "react-router-dom";

const SundaySchools = () => {
  return (
    <>
      <div className="container manglia">
        <div className="row mangliarow">
          <h2>مدارس الأحد</h2>
          <Link
            to={"/sundayschools/babyclass"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            بيبي كلاس
          </Link>
          <Link
            to={"/sundayschools/kg"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            كي جي
          </Link>
          <Link
            to={"/sundayschools/ebtaae"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            إبتدائي
          </Link>
          <Link
            to={"/sundayschools/eadaiegirls"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            إعدادي بنات
          </Link>
          <Link
            to={"/sundayschools/eadadieboys"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            إعدادي أولاد
          </Link>
          <Link
            to={"/sundayschools/thanawiegirls"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            ثانوي بنات
          </Link>
          <Link
            to={"/sundayschools/thanawieboys"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            ثانوي أولاد
          </Link>

          <Link
            to={"/"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChildPicCon"
          >
            <img src={cross2} alt="jes" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SundaySchools;
