import React from "react";
import { Link } from "react-router-dom";
// import marMarcose from "../imgs/marMarcose.jpg";
import jesus from "../imgs/lord-jesus.jpg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bgColor ">
        <div className="container">
          <Link className="navbar-brand" href="/">
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
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الأباء الكهنه
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      أبونا فيلوباتير
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      أبونا مرقس
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      أبونا ايلاريون
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      أبونا يوحنا
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      أبونا صموئيل
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مشروعات كنسية
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      مركز الكاروز الطبي{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      مكتب الرحلات{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      المكتبه{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      استراحة الدور الاول{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      أستراحه الدور الثاني عشر{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      الحضانه{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مدارس الأحد
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      كي جي
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      المرحله الابتدائيه
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      المرحله الأعدايه
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      المرحله الثانويه
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  أجتماعات
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      أجتماع 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
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
