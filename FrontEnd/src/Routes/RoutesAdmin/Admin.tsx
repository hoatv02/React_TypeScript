import React from "react";
import { Route, Routes } from "react-router-dom";
import InfoUser from "../../component/Admin/InfoUser/InfoUser";
import LayoutAdmin from "../../layout/LayoutAdmin/LayoutAdmin";
import AddCategory from "../../pages/PagesAmin/ListCategoryManage/AddCategory/AddCategory";
import EditCategory from "../../pages/PagesAmin/ListCategoryManage/EditCategory/EditCategory";
import ListCategoryManage from "../../pages/PagesAmin/ListCategoryManage/ListCategoryManage";
import AddProduct from "../../pages/PagesAmin/ListProductManage/AddProduct/AddProduct";
import EditProduct from "../../pages/PagesAmin/ListProductManage/EditProduct/EditProduct";
import ListProductManage from "../../pages/PagesAmin/ListProductManage/ListProductManage";
import AddUser from "../../pages/PagesAmin/UserManage/AddUser/AddUser";
import EditUser from "../../pages/PagesAmin/UserManage/EditUser/EditUser";
import UserManage from "../../pages/PagesAmin/UserManage/UserManage";

type Props = {};

const Admin = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<ListProductManage />} />
          <Route path="/product" element={<ListProductManage />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />

          <Route path="/category" element={<ListCategoryManage />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/editCategory/:id" element={<EditCategory />} />

          <Route path="/user" element={<UserManage />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/orders" element={<InfoUser  />} />
          <Route path="/editUser/:id" element={<EditUser />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Admin;
