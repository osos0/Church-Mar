import React from "react";
import cross from "../imgs/cross2.png";

import TextmarMarcose from "../imgs/text1.jpg";
import marMarcose from "../imgs/mar.gif";

const Thebrand = () => {
  return (
    <>
      <div className="container brand">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="brandPicCon">
              <img className="imgshadow" src={cross} alt="cross" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="brandPicCon">
              <img src={TextmarMarcose} alt="cross" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="brandPicCon">
              <img className="imgshadow" src={marMarcose} alt="cross" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thebrand;
