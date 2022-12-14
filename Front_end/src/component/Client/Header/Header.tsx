import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interface/product";
import Profile from "../Profile/Profile";
type Props = {};

const Header = () => {
  // const access = localStorage.getItem("user");
  // const acces = access ? JSON.parse(access) : [];
  //  console.log(access)
  const [isLogin] = useState(localStorage.getItem('accessToken') != null)

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
                      Giới Thiệu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Đặt bàn
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  <Link to="/mycart" className="headerCart">
                    Cart
                  </Link>

                  <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                  {
                    isLogin ?<Profile /> : <div className={` d-flex align-items-center`}>
                    <Link to="/login" className="order_online">
                    Đăng Nhập
                  </Link>
                  
                    <Link to="/register" className="order_online">
                      Đăng Kí
                    </Link>
                  </div>
                  }
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
