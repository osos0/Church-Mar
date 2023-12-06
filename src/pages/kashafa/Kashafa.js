import React from "react";
import cross2 from "../../imgs/cross2.png";
import { Link } from "react-router-dom";

const Kashafa = () => {
  return (
    <>
      <div className="container manglia">
        <div className="row mangliarow">
          <h2>الكشافة</h2>
          <Link
            to={"/kashafa/babyclass"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            بيبي كلاس
          </Link>
          <Link
            to={"/kashafa/kg"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            كي جي
          </Link>
          <Link
            to={"/kashafa/ebtaae"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            إبتدائي
          </Link>
          <Link
            to={"/kashafa/eadaiegirls"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            إعدادي بنات
          </Link>
          <Link
            to={"/kashafa/eadadieboys"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            إعدادي أولاد
          </Link>
          <Link
            to={"/kashafa/thanawiegirls"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            ثانوي بنات
          </Link>
          <Link
            to={"/kashafa/thanawieboys"}
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

export default Kashafa;
