import React from "react";
import { Outlet } from "react-router-dom";
import "../../../style/css/admin.css";
import NavbarLeft from "../../component/Admin/NavbarLeft/NavbarLeft";
import NavbarTop from "../../component/Admin/NavbarTop/NavbarTop";
import Footer from "../../component/Client/Footer/Footer";
type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <div className="sb-nav-fixed">
      <NavbarTop />
      <div id="layoutSidenav">
        <NavbarLeft />
        <div id="layoutSidenav_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
