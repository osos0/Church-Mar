import { useParams } from "react-router-dom";
import React from "react";
import primaryone from "../../imgs/primarie1.png";

const Eachclass = () => {
  const params = useParams();
  return (
    <>
      <h2>{params.class}</h2>
      <div className="container eachclass">
        <h2 className="ConOfTitle">مدارس الأحد</h2>
        <div className="row conofclassofsunday">
          <div className="col-lg-6 col-md-6 col-sm-12 ConOfPrimaryBox imgConOfPrimary ConOfPrimaryBox">
            <img src={primaryone} alt="primary" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ConOfPrimaryBox ConOfPrimaryBox">
            <div>
              <h3>المرحلة</h3>
              <div>بيبي كلاس</div>
            </div>
          </div>
        </div>
        <div className="row conofclassofsunday ">
          <div className="col-lg-4 col-md-4 col-sm-12 ConOfPrimaryBox">
            <div>
              <h3>مكان الخدمة</h3>
              <div>الدور الثاني</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ConOfPrimaryBox">
            <div>
              <h3>الوقت</h3>
              <div>من 08:00 إلى 10:00</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ConOfPrimaryBox">
            <h3>اليوم</h3>
            <div> الجمعة</div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 ConOfPrimaryBox">
            <div>
              <h3>أمين الخدمة</h3>
              <div> استاذ / امير جرجس</div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 ConOfPrimaryBox">
            <div>
              <h3> تنبيهات الأسبوع</h3>
              <div> يوجد قداس الجمعه القادمة </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eachclass;
