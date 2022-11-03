import React from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Course from './pages/CoursePage.js'
import HomePage from './pages/HomePage.js'
import Events from './pages/EventsPage.js'
import Roadmaps from './pages/RoadmapsPage';

const App = () => {
  return (
    <div className="main">
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/course" element={<Course />} />
      <Route path="/event" element={<Events />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
    </Routes>
    </div>
  )
}

export default App
