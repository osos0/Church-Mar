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
                <a className="nav-link" href="/ourchurch">
                  عن كنيستنا
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الأباء الكهنه
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      أبونا فيلوباتير
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      أبونا مرقس
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      أبونا ايلاريون
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      أبونا يوحنا
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      أبونا صموئيل
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مشروعات كنسية
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      مركز الكاروز الطبي
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      مكتب الرحلات{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      المكتبه{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      استراحة الدور الاول{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      أستراحه الدور الثاني عشر{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      الحضانه{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مدارس الأحد
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      كي جي
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      المرحله الابتدائيه
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      المرحله الأعدايه
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      المرحله الثانويه
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  أجتماعات
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      أجتماع 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      أجتماع 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/kodas">
                  القداسات
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manglia">
                  المنجلية
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  الرئيسية
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
