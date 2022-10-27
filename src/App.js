import React from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Course from './pages/CoursePage.js'
import HomePage from './pages/HomePage.js'
import Events from './pages/EventsPage.js'

const App = () => {
  return (
    <div className="main">
    <Routes>
      <Route exact path="/commclassroom" element={<HomePage/>} />
      <Route exact path="/commclassroom/course" element={<Course />} />
      <Route exact path="/commclassroom/event" element={<Events />} />
    </Routes>
    </div>
  )
}

export default App
