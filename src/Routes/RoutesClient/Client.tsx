import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutClient from "../../layout/LayoutClient/LayoutClient";
import About from "../../pages/PagesClient/About/About";
import Home from "../../pages/PagesClient/Home/Home";
import Login from "../../pages/PagesClient/Login/Login";
import Register from "../../pages/PagesClient/Register/Register";
import MenuProducts from "../../pages/PagesClient/MenuProduct/MenuProduct";
import ProductDetail from "../../pages/PagesClient/ProductDetail/ProductDetail";
import MyCart from "../../component/Client/MyCart/MyCart";
import PaginatedItems from "../../component/Client/MyCart/Pages";
import ConfirmCart from "../../pages/PagesClient/ConfirmCart/ConfirmCart";
import Profile from "../../pages/PagesClient/Profile/Profile";
type Props = {};

const Client = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<LayoutClient />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<MenuProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/page" element={<PaginatedItems itemsPerPage={4} />} />
          <Route path="/checkout" element={<ConfirmCart />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Client;
