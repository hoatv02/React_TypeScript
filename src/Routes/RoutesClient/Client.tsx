import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../../component/Client/ListProduct/ListProduct'
import LayoutClient from '../../layout/LayoutClient/LayoutClient'
import About from '../../pages/PagesClient/About/About'
import Home from '../../pages/PagesClient/Home/Home'

type Props = {}

const Client = (props: Props) => {
  return (
    <> 
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </>
  )
}

export default Client