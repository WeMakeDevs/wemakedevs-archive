import React from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Course from './pages/CoursePage.js'
import HomePage from './pages/HomePage.js'

const App = () => {
  return (
    <div className="main">
    <Routes>
      <Route exact path="/commclassroom" element={<HomePage/>} />
      <Route path="/commclassroom/course" element={<Course />} />
    </Routes>
    </div>
  )
}


export default App