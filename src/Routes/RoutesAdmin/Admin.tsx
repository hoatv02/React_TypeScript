import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin'
import Dashboard from '../../pages/PagesAmin/Dashboard/Dashboard'
import ListCategoryManage from '../../pages/PagesAmin/ListCategoryManage/ListCategoryManage'
import AddProduct from '../../pages/PagesAmin/ListProductManage/AddProduct/AddProduct'
import ListProductManage from '../../pages/PagesAmin/ListProductManage/ListProductManage'

type Props = {}

const Admin = (props: Props) => {
  return (
    <>
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route index element={<Dashboard/>} />
        <Route path="/product" element={<ListProductManage />} />
        <Route path="/category" element={<ListCategoryManage />} />
        <Route path="/addProduct" element={<AddProduct />} />

        {/* <Route path="/product" element={<Product />}/> */}
        {/* <Route path="/about" element={<About />}/> */}
        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
      </Route>
    </Routes>
  </>
  )
}

export default Admin