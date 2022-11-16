import React from "react";
import { Link } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="marignbt">
      <div className="hero_area">
        <div className="bg-boxs">
        </div>
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
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/product">
                      Menu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Book Table
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  <Link to="" className="user_link">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </Link>
                  <Link className="cart_link" to="#"></Link>
                  <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                  <Link to="" className="order_online">
                    Order Online
                  </Link>
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
