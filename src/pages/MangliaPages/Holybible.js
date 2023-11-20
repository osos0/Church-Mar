import React from "react";
import { useState, useEffect } from "react";
import Allold from "../../data/Holy-Bible/old/0Allold";
import Allnew from "../../data/Holy-Bible/new/0Allnew";

const Holybilble = () => {
  // kind section between عهد جديد و عهد قديم
  const [kind, setKind] = useState("العهد القديم");

  // choose sefr indebencse of the kind of old or new
  const [sefr, setSefr] = useState("سفر التكوين");

  //
  const [optionOfKind, setOptionOfKind] = useState(0);

  // number of es7a7
  const [numberofseferold, setNumberofseferold] = useState(0);
  const [numberofsefernew, setNumberofsefernew] = useState(0);

  //name of the option (سفر التكوين)  label value
  const [Labelofsefernew, setLabelofsefernew] = useState("إنجيل متى");
  const [Labelofseferold, setLabelofseferold] = useState("سفر التكوين");

  // innerHTML of erery option ele
  const [innernew, setInnernew] = useState("mata");
  const [innerold, setInnerold] = useState("takwen");

  useEffect(() => {
    if (kind === "العهد القديم") {
      setOptionOfKind("الكتاب المقدس");
      setSefr(
        <select
          onChange={(e) => {
            const valNumOld = e.target.value;
            setNumberofseferold(valNumOld);
            const labelsefr = e.target.options[e.target.selectedIndex].label;
            setLabelofseferold(labelsefr);

            const ino = e.target.options[e.target.selectedIndex].innerHTML;
            setInnerold(ino);
          }}
        >
          <option value="50" label="سفر التكوين">
            takwen
          </option>
          <option value="40" label="سفر الخروج">
            khroge
          </option>
          <option value="27" label="سفر اللاويين">
            lawien
          </option>
          <option value="36" label="سفر العدد">
            elAdad
          </option>
          <option value="34" label="سفر التثنية">
            Eltathniah
          </option>
          <option value="24" label="سفر يشوع">
            Yashoa
          </option>
          <option value="21" label="سفر القضاة">
            ElKodah
          </option>
          <option value="4" label="سفر راعوث">
            Raaos
          </option>
          <option value="31" label="سفر صموئيل الأول">
            SamyaelFirst
          </option>
          <option value="24" label="سفر صموئيل الثانى">
            Samyaelseconde
          </option>
          <option value="22" label="سفر الملوك الأول">
            ElmlokeFirst
          </option>
          <option value="25" label="سفر الملوك الثانى">
            ElmlokeSecond
          </option>
          <option value="29" label="سفر أخبار الأيام الأول">
            AkhbarFirst
          </option>
          <option value="36" label="سفر أخبار الأيام الثانى">
            AkhbarSecond
          </option>
          <option value="10" label="سفر عزرا">
            Azrah
          </option>
          <option value="13" label="سفر نحميا">
            Nahmia
          </option>
          <option value="16" label="سفر أستير">
            Esteir
          </option>
          <option value="42" label="سفر أيوب">
            Aiob
          </option>
          <option value="151" label="سفر المزامير">
            Mazamer
          </option>
          <option value="31" label="سفر الأمثال">
            Amthal
          </option>
          <option value="12" label="سفر الجامعة">
            Elgamaah
          </option>
          <option value="8" label="نشيد الاناشيد">
            NashedElanashed
          </option>
          <option value="66" label="سفر أشعياء">
            Ashaiaa
          </option>
          <option value="52" label="سفر أرميا">
            Armiah
          </option>
          <option value="5" label="سفر مراثى أرميا">
            MaratheArmiah
          </option>
          <option value="48" label="سفر حزقيال">
            Hazkial
          </option>
          <option value="14" label="سفر دانيال">
            Danial
          </option>
          <option value="14" label="سفر هوشع">
            Hoshaa
          </option>
          <option value="3" label="سفر يوئيل">
            Youeel
          </option>
          <option value="9" label="سفر عاموس">
            Amose
          </option>
          <option value="1" label="سفر عوبديا">
            oubdia
          </option>
          <option value="4" label="سفر يونان">
            Yonan
          </option>
          <option value="7" label="سفر ميخا">
            Mekhah
          </option>
          <option value="3" label="سفر ناحوم">
            Nahoum
          </option>
          <option value="3" label="سفر حبقوق">
            Habkouk
          </option>
          <option value="3" label="سفر صفنيا">
            Savnia
          </option>
          <option value="2" label="سفر حجى">
            Hage
          </option>
          <option value="14" label="سفر زكريا">
            Zakriah
          </option>
          <option value="4" label="سفر ملاخى">
            Malkhe
          </option>
        </select>
      );
    } else {
      setOptionOfKind("الكتاب المقدس");
      setSefr(
        <select
          onChange={(e) => {
            const valNumNew = e.target.value;
            setNumberofsefernew(valNumNew);
            const labelsefr = e.target.options[e.target.selectedIndex].label;
            setLabelofsefernew(labelsefr);

            const ino = e.target.options[e.target.selectedIndex].innerHTML;
            setInnernew(ino);
          }}
        >
          <option value="28" label="إنجيل متى">
            mata
          </option>
          <option value="16" label=" إنجيل مرقس">
            marcos
          </option>
          <option value="24" label="إنجيل لوقا">
            loka
          </option>
          <option value="21" label="إنجيل يوحنا">
            youhana
          </option>
          <option value="28" label="أعمال الرسل">
            amalElrosl
          </option>
          <option value="16" label="الرسالة إلى أهل رومية">
            massegeForahalRomia
          </option>
          <option value="16" label="الرسالة الأولى إلى أهل كورنثوس">
            massegeForahalKoronsose
          </option>
          <option value="13" label="الرسالة الثانية إلى أهل كورنثوس">
            massegeForahalkoronsostwo
          </option>
          <option value="6" label="الرسالة إلى أهل غلاطية">
            massegeForahalgaltiah
          </option>
          <option value="6" label="الرسالة إلى أهل أفسس">
            massegeForahalAfsos
          </option>
          <option value="4" label="الرسالة إلى أهل فيلبى">
            massegeForahalfelipe
          </option>
          <option value="4" label="الرسالة إلى أهل كولوسى">
            massegeForahalKolosi
          </option>
          <option value="5" label="الرسالة الأولى إلى أهل تسالونيكى">
            massegeForahalTaslokonie
          </option>
          <option value="3" label="الرسالة الثانية إلى أهل تسالونيكى">
            massegeForahalTaslokonietwo
          </option>
          <option value="6" label="الرسالة الأولى إلى تيموثاوس">
            massegeForahalTemsawes
          </option>
          <option value="4" label="الرسالة الثانية إلى تيموثاوس">
            massegeForahalTemsawestwo
          </option>
          <option value="3" label="الرسالة إلى تيطس">
            massegeForahalTitas
          </option>
          <option value="1" label="الرسالة إلى فليمون">
            massegeForahalfilmon
          </option>
          <option value="13" label="الرسالة إلى العبرانيين">
            massegeForahalAbranion
          </option>
          <option value="5" label="رسالة يعقوب">
            massegeyaakob
          </option>
          <option value="5" label="رسالة بطرس الأولى">
            massegeBotroseone
          </option>
          <option value="3" label="رسالة بطرس الثانية">
            massegeBotrosetwo
          </option>
          <option value="5" label="رسالة يوحنا الأولى">
            massegeyohanaOne
          </option>
          <option value="1" label="رسالة يوحنا الثانية">
            massegeyohanatwo
          </option>
          <option value="1" label="رسالة يوحنا الثالثة">
            massegeyohanaThree
          </option>
          <option value="1" label="رسالة يهوذا">
            massegeYahoza
          </option>
          <option value="22" label="رؤيا يوحنا">
            RoayaYohana
          </option>
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
            {/* العهد */}
            <select
              onChange={(e) => {
                const selectedKind = e.target.value;
                setKind(selectedKind);
              }}
            >
              <option value="العهد القديم">العهد القديم</option>
              <option value="العهد الجديد">العهد الجديد</option>
            </select>

            {/* السفر */}
            {sefr}

            {/* الاصحاح */}
            <select
              onChange={(e) => {
                const sekind = e.target.value;

                setOptionOfKind(sekind);
              }}
            >
              {generateOptions(
                kind === "العهد الجديد" ? numberofsefernew : numberofseferold
              )}
            </select>
          </div>
          <div className="col-lg-12 col-md-12 col-md-12 holybilblerowChild2">
            <h4>{kind}</h4>
            <h2>
              {kind === "العهد الجديد" ? Labelofsefernew : Labelofseferold}
            </h2>
            <h2>
              {kind === "العهد القديم"
                ? Allold[innerold].title
                : Allnew[innernew].title}
            </h2>
            <h4>{optionOfKind}</h4>
            <h4>{kind === "العهد الجديد" ? innernew : innerold}</h4>
            <p>
              {kind === "العهد القديم"
                ? Allold[innerold].text[optionOfKind - 1]
                : Allnew[innernew].text[optionOfKind - 1]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holybilble;
