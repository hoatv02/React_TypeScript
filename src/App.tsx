import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/PagesClient/Home/Home'
import Header from './component/Client/Header/Header'
import LayoutClient from './layout/LayoutClient/LayoutClient'
import HeaderNoSlider from './component/Client/HeaderNoSlider/HeaderNoSlider'
import Product from './pages/PagesClient/MenuProduct/MenuProduct'
import About from './pages/PagesClient/About/About'
import Admin from './Routes/RoutesAdmin/Admin'
import Client from './Routes/RoutesClient/Client'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route  path="/admin/*"element={<Admin/>}/>
      <Route  path="*"element={<Client />}/>
      {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
    </Routes>
  </div>
  )
}

export default App
