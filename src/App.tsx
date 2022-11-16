import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './component/Header/Header'
import LayoutClient from './layout/LayoutClient/LayoutClient'
import HeaderNoSlider from './component/HeaderNoSlider/HeaderNoSlider'
import Product from './pages/MenuProduct/MenuProduct'
import About from './pages/About/About'
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
