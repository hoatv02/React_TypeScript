import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin'

type Props = {}

const Admin = (props: Props) => {
  return (
    <>
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route index element={<h1>Admin home</h1>} />
        <Route path="/a" element={<h1>Product home</h1>} />
        {/* <Route path="/product" element={<Product />}/> */}
        {/* <Route path="/about" element={<About />}/> */}
        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
      </Route>
    </Routes>
  </>
  )
}

export default Admin