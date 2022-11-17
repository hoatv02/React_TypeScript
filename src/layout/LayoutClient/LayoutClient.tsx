import React from 'react'
import Footer from '../../component/Client/Footer/Footer'
import Header from '../../component/Client/Header/Header'
import {Outlet} from 'react-router-dom'
type Props = {}

const LayoutClient = (props: Props) => {
  return (
    <div>
        <Header/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default LayoutClient