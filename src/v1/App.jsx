import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/homev2" element={<Home></Home>} />
    </Routes>
  )
}

export default App