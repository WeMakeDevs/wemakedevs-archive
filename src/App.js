import React from 'react'
import './App.css'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Courses from './components/Courses.js'

const App = () => {
  return (
    <div className="main">
    <About />
    <Courses />
    <Footer />
    </div>
  )
}

export default App