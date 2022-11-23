import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
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
