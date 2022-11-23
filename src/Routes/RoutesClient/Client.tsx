import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutClient from '../../layout/LayoutClient/LayoutClient'
import About from '../../pages/PagesClient/About/About'
import Home from '../../pages/PagesClient/Home/Home'
import Login from '../../pages/PagesClient/Login/Login'
import Register from '../../pages/PagesClient/Register/Register'
import MenuProducts from '../../pages/PagesClient/MenuProduct/MenuProduct'
import ProductDetail from '../../pages/PagesClient/ProductDetail/ProductDetail'

type Props = {}

const Client = (props: Props) => {
  return (
    <> 
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<MenuProducts />} />
        <Route path="/about" element={<About />} />

        <Route path="/productDetail/:id" element={<ProductDetail />} />

      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


    </Routes>
  </>
  )
}

export default Client