import React from "react";
import { Link } from "react-router-dom";
// import marMarcose from "../imgs/marMarcose.jpg";
import jesus from "../imgs/lord-jesus.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bgColor ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={jesus} alt="marMarcose" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className="nav-link" to="/ourchurch">
                  عن كنيستنا
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الأباء الكهنه
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      أبونا فيلوباتير
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      أبونا مرقس
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      أبونا ايلاريون
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      أبونا يوحنا
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      أبونا صموئيل
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مشروعات كنسية
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      مركز الكاروز الطبي{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      مكتب الرحلات{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      المكتبه{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      استراحة الدور الاول{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      أستراحه الدور الثاني عشر{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      الحضانه{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مدارس الأحد
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      كي جي
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      المرحله الابتدائيه
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      المرحله الأعدايه
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      المرحله الثانويه
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  أجتماعات
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      أجتماع 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      أجتماع 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kodas">
                  القداسات
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manglia">
                  المنجلية
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  الرئيسية
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
