import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NavbarLeft = (props: Props) => {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="/admin/">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Manage</div>
            <Link to="/admin/product">
              <span
                className="nav-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns"></i>
                </div>
                Products
              </span>
            </Link>
            <Link to="/admin/category">
              {" "}
              <p
                className="nav-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                Category
              </p>
            </Link>
            <Link to="/admin/user">
              {" "}
              <p
                className="nav-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                User
              </p>
            </Link>
            <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Category
            </Link>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <Link className="nav-link" to="index.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Charts
            </Link>
            <Link className="nav-link" to="index.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table"></i>
              </div>
              Tables
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};

export default NavbarLeft;
