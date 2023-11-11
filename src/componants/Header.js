import React from "react";
import pi1 from "../imgs/church-001.jpg";
import pi2 from "../imgs/church-002.jpg";
import pi3 from "../imgs/church-003.jpg";
import pi4 from "../imgs/church-004.jpg";

const Header = () => {
  return (
    <>
      <div className="Navourchurch">
        <div className="row NavChurchChild">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={pi1} className="d-block w-100" alt="4" />
                  {/* <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div> */}
                </div>
                <div className="carousel-item">
                  <img src={pi2} className="d-block w-100" alt="2" />
                  {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second slide.
                  </p>
                </div> */}
                </div>
                <div className="carousel-item">
                  <img
                    src={pi3}
                    className="d-block w-100"
                    alt="3
          "
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div> */}
                </div>
                <div className="carousel-item">
                  <img
                    src={pi4}
                    className="d-block w-100"
                    alt="3
          "
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Fourth slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div> */}
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="NavchuConText">
              <h2>كنيسة مارمرقس الرسول القبطية الأرثوذكسية </h2>
              <h5>النزهة الجديدة 2، جسر السويس، القاهرة، مصر</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
