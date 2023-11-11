import React from "react";
// import churchPic from "../imgs/church-006.jpg";
import Header from "../componants/Header";
import faFilopater from "../imgs/f-filopater.jpg";
import marMarcose from "../imgs/marMarcose.jpg";
import berbarah from "../imgs/berbarah.jpg";
import abosefen from "../imgs/abosefen.jpg";
import faioum from "../imgs/faioum.jpg";
import babaKirols from "../imgs/babaKirols.jpg";
import margergies from "../imgs/margergies.jpg";
import StMina from "../imgs/StMina.jpg";
import youhana from "../imgs/youhana.jpg";
import stabanoub from "../imgs/st-abanoub.jpg";
import ansnah from "../imgs/ansnah.jpg";
import elaishaa from "../imgs/elaishaa.jpg";
import takla from "../imgs/takla.jpg";
import marMar from "../imgs/mar.gif";

const Ourchurch = () => {
  return (
    <>
      <div className="container ourchurch">
        <Header />
        <div className="row chuOthersSection">
          <h2> الإيبارشية</h2>
          <div>منطقة مدينة السلام والحرفيين، بالقاهرة</div>
        </div>
        <div className="row chuOthersSection">
          <h2> العنوان/المكان</h2>
          <div>شارع الـ15، الخمسين، النزهة الجديدة 2، جسر السويس.</div>
        </div>
        <div className="row chuOthersSection">
          <h2> شفيع الكنيسة</h2>
          <div>القديس مرقس الرسول والإنجيلي والشهيد البطريرك الأول</div>
        </div>
        <div className="row chuOthersSection">
          <h2> أعياد شفيع الكنيسة</h2>
          <div className="row marmarcoFather">
            <div className="col-lg-5 col-md-6 col-sm-12 marmarPic">
              <img src={marMar} alt="marmarcose" />
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 ">
              <div>
                استشهاد مارمرقس الرسول أول باباوات الإسكندرية (30 برمودة)
              </div>
              <div>استلام رفات ماري مرقس في روما (15 بؤونة) </div>
              <div>عودة رفات القديس مارمرقص (17 بؤونة) </div>
              <div>
                افتتاح الكاتدرائية المرقسية الجديدة بدير الأنبا رويس (18 بؤونة){" "}
              </div>
              <div>
                إقامة أول قداس حبري بالكاتدرائية المرقسية الجديدة بدير الأنبا
                رويس (19 بؤونة)
              </div>
              <div> ظهور رأس مارمرقص الإنجيلي وتكريس كنيسته (30 بابة)</div>
              <div>عودة رأس القديس مار مرقص الرسول (8 طوبة)</div>
            </div>
          </div>
        </div>
        <div className="row chuOthersSection">
          <h2> أجساد ورفات وذخائر بالكنيسة</h2>
          <div className="row chuOthersSection2">
            <div className="col-lg-12 col-md-12 col-sm-12 rightBodies">
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={marMarcose} alt="bodiesSmall" />
                </div>
                <h5>الشهيد مار مرقس</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={berbarah} alt="bodiesSmall" />
                </div>
                <h5> القديسة بربارة</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={abosefen} alt="bodiesSmall" />
                </div>
                <h5> الشهيد أبو سيفين</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={faioum} alt="bodiesSmall" />
                </div>
                <h5>شهداء الفيوم</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={babaKirols} alt="bodiesSmall" />
                </div>
                <h5>شعر البابا كيرلس</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={margergies} alt="bodiesSmall" />
                </div>
                <h5>الشهيد مارجرجس</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={StMina} alt="bodiesSmall" />
                </div>
                <h5>الشهيد مار مينا</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={youhana} alt="bodiesSmall" />
                </div>
                <h5>ماري يوحنا الجندي</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={stabanoub} alt="bodiesSmall" />
                </div>
                <h5> الشهيد أبانوب</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={ansnah} alt="bodiesSmall" />
                </div>
                <h5> شهداء أنصنا</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={elaishaa} alt="bodiesSmall" />
                </div>
                <h5>أليشع النبي</h5>
              </div>
              <div className="rightBodiesChild">
                <div className="bodiesSmallPic">
                  <img src={takla} alt="bodiesSmall" />
                </div>
                <h5>القديس تكلا هيمانوت</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row chuOthersSection">
          <h2>كهنة الكنيسة</h2>
          <div className="row fathersFlex">
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="faCon">
                <div className="fathersCon">
                  <img src={faFilopater} alt="fatherPic" />
                </div>
                <div className="fathertext">
                  <div>أبونا القس فيلوباتير مجدي روفائيل</div>
                  <div>ر. 16 نوفمبر 2014 م</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="faCon">
                <div className="fathersCon">
                  <img src={faFilopater} alt="fatherPic" />
                </div>
                <div className="fathertext">
                  <div>أبونا القس يوحنا زاخر زخاري</div>
                  <div>ر. 16 نوفمبر 2014 م</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="faCon">
                <div className="fathersCon">
                  <img src={faFilopater} alt="fatherPic" />
                </div>
                <div className="fathertext">
                  <div>أبونا القس إيلاريون جرجس أبو سيف يوسف</div>
                  <div>ر. 16 نوفمبر 2014 م</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="faCon">
                <div className="fathersCon">
                  <img src={faFilopater} alt="fatherPic" />
                </div>
                <div className="fathertext">
                  <div>أبونا القس مرقس نسيم كامل خليل</div>
                  <div>ر. 22 نوفمبر 2018م</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="faCon">
                <div className="fathersCon">
                  <img src={faFilopater} alt="fatherPic" />
                </div>
                <div className="fathertext">
                  <div>أبونا القس صموئيل القمص صليب صليب</div>
                  <div>ر. 22 نوفمبر 2018م</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourchurch;
