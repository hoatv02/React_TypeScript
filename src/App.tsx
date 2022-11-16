import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/PagesClient/Home/Home'
import Header from './component/Client/Header/Header'
import LayoutClient from './layout/LayoutClient/LayoutClient'
import HeaderNoSlider from './component/Client/HeaderNoSlider/HeaderNoSlider'
import Product from './pages/PagesClient/MenuProduct/MenuProduct'
import About from './pages/PagesClient/About/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutClient/>}>
            <Route index element={<Home/>}/>
            <Route path="/product" element={<Product />}/>
            <Route path="/about" element={<About />}/>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

    </div>
  )
}

export default App
