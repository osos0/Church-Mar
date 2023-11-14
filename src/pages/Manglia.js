import React from "react";
import cross2 from "../imgs/cross2.png";
import { Link } from "react-router-dom";

const Manglia = () => {
  return (
    <>
      <div className="container manglia">
        <div className="row mangliarow">
          <h2>المنجلية</h2>
          <Link
            to={"/holybible"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            الكتاب المقدس
          </Link>
          <Link
            to={"/"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            الأجبية
          </Link>
          <Link
            to={"/"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            الخولاجي
          </Link>
          <Link
            to={"/"}
            className="col-lg-12 col-md-12 col-md-12 mangliarowChild"
          >
            السنكسار
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

export default Manglia;
