import React from "react";
import church006 from "../imgs/church-006.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  return (
    <>
      <div className="container newsCon">
        <h2 className="ConOfTitle"> أخبار الكنيسة</h2>
        <div className="row newsCards">
          <div className="col-lg-4 col-md-6 col-sm-12 newsCardsChild">
            <div className="newsCardsChildReal">
              <div className="newPicCon">
                <img src={church006} alt="newsPic" />
              </div>
              <div className="dateCon">
                <FontAwesomeIcon icon={faCalendarDay} />
                <div>20-Dec-2020</div>
                <div> 07:00 PM </div>
              </div>
              <div className="newsTextAll">
                الجدير بالذكر أن مجلس كنائس مصر تأسس عام 2013 كمؤسسة تجمع فى
                عضويتها خمسة كنائس مصرية تمثل الطوائف المختلفة، الكنيسة القبطية
                الأرثوذكسية، والكنيسة الإنجيلية، والكنيسة القبطية الكاثوليكية،
                وكنيسة الروم الأرثوذكس والكنيسة الأسقفية، وهو أول كيان يجمع
                الطوائف المصرية معا.
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 newsCardsChild">
            <div className="newsCardsChildReal">
              <div className="newPicCon">
                <img src={church006} alt="newsPic" />
              </div>
              <div className="dateCon">
                <FontAwesomeIcon icon={faCalendarDay} />
                <div>20-Dec-2020</div>
                <div> 07:00 PM </div>
              </div>
              <div className="newsTextAll">
                الجدير بالذكر أن مجلس كنائس مصر تأسس عام 2013 كمؤسسة تجمع فى
                عضويتها خمسة كنائس مصرية تمثل الطوائف المختلفة، الكنيسة القبطية
                الأرثوذكسية، والكنيسة الإنجيلية، والكنيسة القبطية الكاثوليكية،
                وكنيسة الروم الأرثوذكس والكنيسة الأسقفية، وهو أول كيان يجمع
                الطوائف المصرية معا.
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 newsCardsChild">
            <div className="newsCardsChildReal">
              <div className="newPicCon">
                <img src={church006} alt="newsPic" />
              </div>
              <div className="dateCon">
                <FontAwesomeIcon icon={faCalendarDay} />
                <div>20-Dec-2020</div>
                <div> 07:00 PM </div>
              </div>
              <div className="newsTextAll">
                الجدير بالذكر أن مجلس كنائس مصر تأسس عام 2013 كمؤسسة تجمع فى
                عضويتها خمسة كنائس مصرية تمثل الطوائف المختلفة، الكنيسة القبطية
                الأرثوذكسية، والكنيسة الإنجيلية، والكنيسة القبطية الكاثوليكية،
                وكنيسة الروم الأرثوذكس والكنيسة الأسقفية، وهو أول كيان يجمع
                الطوائف المصرية معا.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
