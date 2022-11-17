import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <div>
      <header>Header admin</header>
      <Outlet />
      <footer>Footer admin</footer>
    </div>
  );
};

export default LayoutAdmin;
