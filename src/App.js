import React from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Course from './pages/CoursePage.js'
import HomePage from './pages/HomePage.js'
import Events from './pages/EventsPage.js'
import Roadmaps from './pages/RoadmapsPage'
import Hashnode from './pages/Hashnode.js'
import ComingSoon from './pages/Comingsoon.js'

const App = () => {
  return (
    <div className="main">
    <Routes>
      <Route exact path="/" element={<ComingSoon/>} />
      {/* <Route path="/course" element={<Course />} />
      <Route path="/event" element={<Events />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
      <Route path="/hashnode" element={<Hashnode />} /> */}
    </Routes>
    </div>
  )
}

export default App
