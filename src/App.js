import React from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Course from './pages/CoursePage.js'
import HomePage from './pages/HomePage.js'

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/course" element={<Course />} />
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </div>
  )
}


export default App