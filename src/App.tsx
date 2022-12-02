import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./Routes/RoutesAdmin/Admin";
import Client from "./Routes/RoutesClient/Client";
import { Themes, ThemesContext } from "./utils/ThemeContext";

function App() {
  return (
    <div className="App">
      <Themes>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<Client />} />
          {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
        </Routes>
      </Themes>
    </div>
  );
}

export default App;
