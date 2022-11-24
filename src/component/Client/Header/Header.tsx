import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="marignbt">
      <div className="hero_area">
        <div className="bg-boxs"></div>
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="/">
                <span>Pizza</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  mx-auto ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Trang chủ <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/product">
                      Sản phẩm
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      Thông tin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Đặt bàn
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  <Link to="" className="user_link">
                    {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                  </Link>
                  <Link className="cart_link" to="#"></Link>
                  <a
                    style={{ color: "#fff", cursor: "pointer" }}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    Cart
                  </a>
                  <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                  <Link to="/login" className="order_online">
                    Đăng Nhập
                  </Link>
                  <div className={` d-flex align-items-center`}>
                    <Link to="/register" className="order_online">
                      Đăng Kí
                    </Link>
                  </div>
                  <Profile />
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div
            className="offcanvas-header"
            style={{
              backgroundColor: "#ffbe33",
              fontSize: "8px",
              height: "80px",
            }}
          >
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              My Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
