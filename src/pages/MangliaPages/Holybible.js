import React from "react";
import { useState, useEffect } from "react";
// import takwine from "../../data/Holy-Bible/old/1TakwenGenesis.js";
import TakwenGenesis1 from "../../data/Holy-Bible/old/1TakwenGenesis.js";

const Holybilble = () => {
  // kind section
  const [kind, setKind] = useState("العهد القديم");
  const [sefr, setSefr] = useState("سفر التكوين");

  const [numberofseferold, setNumberofseferold] = useState(50);
  const [numberofsefernew, setNumberofsefernew] = useState(28);

  useEffect(() => {
    if (kind === "العهد الجديد") {
      setSefr(
        <select
          onClick={(e) => {
            const valNumNew = e.target.value;
            setNumberofsefernew(valNumNew);
          }}
        >
          <option value="28" label="إنجيل متى" />
          <option value="16" label=" إنجيل مرقس" />
          <option value="24" label="إنجيل لوقا" />
          <option value="21" label="إنجيل يوحنا" />
          <option value="28" label="أعمال الرسل" />
          <option value="16" label="الرسالة إلى أهل رومية" />
          <option value="16" label="الرسالة الأولى إلى أهل كورنثوس" />
          <option value="13" label="الرسالة الثانية إلى أهل كورنثوس" />
          <option value="6" label="الرسالة إلى أهل غلاطية" />
          <option value="6" label="الرسالة إلى أهل أفسس" />
          <option value="4" label="الرسالة إلى أهل فيلبى" />
          <option value="4" label="الرسالة إلى أهل كولوسى" />
          <option value="5" label="الرسالة الأولى إلى أهل تسالونيكى" />
          <option value="3" label="الرسالة الثانية إلى أهل تسالونيكى" />
          <option value="6" label="الرسالة الأولى إلى تيموثاوس" />
          <option value="4" label="الرسالة الثانية إلى تيموثاوس" />
          <option value="3" label="الرسالة إلى تيطس" />
          <option value="1" label="الرسالة إلى فليمون" />
          <option value="13" label="الرسالة إلى العبرانيين" />
          <option value="5" label="رسالة يعقوب" />
          <option value="5" label="رسالة بطرس الأولى" />
          <option value="3" label="رسالة بطرس الثانية" />
          <option value="5" label="رسالة يوحنا الأولى" />
          <option value="1" label="رسالة يوحنا الثانية" />
          <option value="1" label="رسالة يوحنا الثالثة" />
          <option value="1" label="رسالة يهوذا" />
          <option value="22" label="رؤيا يوحنا" />
        </select>
      );
    } else {
      setSefr(
        <select
          onClick={(e) => {
            const valNumOld = e.target.value;
            setNumberofseferold(valNumOld);
          }}
        >
          <option value="50" label="سفر التكوين" />
          <option value="40" label="سفر الخروج" />
          <option value="27" label="سفر اللاويين" />
          <option value="36" label="سفر العدد" />
          <option value="34" label="سفر التثنية" />
          <option value="24" label="سفر يشوع" />
          <option value="21" label="سفر القضاة" />
          <option value="4" label="سفر راعوث" />
          <option value="31" label="سفر صموئيل الأول" />
          <option value="24" label="سفر صموئيل الثانى" />
          <option value="22" label="سفر الملوك الأول" />
          <option value="25" label="سفر الملوك الثانى" />
          <option value="29" label="سفر أخبار الأيام الأول" />
          <option value="36" label="سفر أخبار الأيام الثانى" />
          <option value="10" label="سفر عزرا" />
          <option value="13" label="سفر نحميا" />
          <option value="16" label="سفر أستير" />
          <option value="42" label="سفر أيوب" />
          <option value="151" label="سفر المزامير" />
          <option value="31" label="سفر الأمثال" />
          <option value="12" label="سفر الجامعة" />
          <option value="8" label="نشيد الاناشيد" />
          <option value="66" label="سفر أشعياء" />
          <option value="52" label="سفر أرميا" />
          <option value="5" label="سفر مراثى أرميا" />
          <option value="48" label="سفر حزقيال" />
          <option value="14" label="سفر دانيال" />
          <option value="14" label="سفر هوشع" />
          <option value="3" label="سفر يوئيل" />
          <option value="9" label="سفر عاموس" />
          <option value="1" label="سفر عوبديا" />
          <option value="4" label="سفر يونان" />
          <option value="7" label="سفر ميخا" />
          <option value="3" label="سفر ناحوم" />
          <option value="3" label="سفر حبقوق" />
          <option value="3" label="سفر صفنيا" />
          <option value="2" label="سفر حجى" />
          <option value="14" label="سفر زكريا" />
          <option value="4" label="سفر ملاخى" />
        </select>
      );
    }
  }, [kind]);

  const generateOptions = (numberofsefernew) => {
    let options = [];
    for (let i = 1; i <= numberofsefernew; i++) {
      options.push(<option key={i} value={i} label={i} />);
    }
    return options;
  };

  return (
    <>
      <div className="container holybilble">
        <div className="row holybilblerow">
          <div className="col-lg-12 col-md-12 col-md-12 holybilblerowChild1">
            <select
              onChange={(e) => {
                const selectedKind = e.target.value;
                setKind(selectedKind);
              }}
            >
              <option value="العهد القديم">العهد القديم</option>
              <option value="العهد الجديد">العهد الجديد</option>
            </select>

            {sefr}

            <select>
              {generateOptions(
                kind === "العهد الجديد" ? numberofsefernew : numberofseferold
              )}
            </select>
          </div>
          <div className="col-lg-12 col-md-12 col-md-12 holybilblerowChild2">
            <h4>{kind}</h4>
            {/* <h2>سفر التكوين</h2> */}
            <h2>{TakwenGenesis1[0].title}</h2>
            <h4> {TakwenGenesis1[0].id}</h4>
            <p>{TakwenGenesis1[0].text1}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holybilble;
