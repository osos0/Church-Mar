import React from "react";
import { Link } from "react-router-dom";
import fotPic from "../imgs/cross2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookMessenger,
  faSquareFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container footerGenral">
        <div className="row conOfFooter">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="fotPicCon1">
              <div className="fotPicCon">
                <img src={fotPic} alt="fotPic" />
              </div>
              <h5>
                كنيسة مارمرقس الرسول القبطية الأرثوذكسية النزهة الجديدة 2،
              </h5>
              <p> جسر السويس، القاهرة، مصر</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 fotPicCon2">
            <h2 className="titleFooterH2">
              صفحات الموقع
              <hr />
            </h2>
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  الكتاب المقدس
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  القدسات
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  أجتماعات
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/ourchurch">
                  عن كنيستنا
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 fotPicCon3">
            <ul className="ulcon">
              <div className="lichild1">
                <li>
                  <div className="fotMapCon">
                    <div>
                      شارع الـ15، الخمسين، النزهة الجديدة 2، جسر السويس .القاهره
                    </div>
                    <FontAwesomeIcon icon={faLocationPin} />
                  </div>
                </li>
                <li>
                  <div className="fotMapCon">
                    <div>012 000 0000 00</div>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                </li>
                <li>
                  <div className="fotMapCon">
                    <div>كنيسه مارمارقس النزهه 2</div>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </li>
                <li>
                  <Link className="nav-link" to="/ourchurch"></Link>
                </li>
              </div>
              <div className="lichild2">
                <li>
                  <div className="conOfsvg">
                    <Link to="/" target="_blank">
                      <FontAwesomeIcon icon={faSquareFacebook} />
                    </Link>
                    <Link to="http://m.me///" target="_blank">
                      <FontAwesomeIcon icon={faFacebookMessenger} />
                    </Link>
                    <Link
                    // to="https://api.whatsapp.com/send?phone=201210008710"
                    // target="_blank"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </Link>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
