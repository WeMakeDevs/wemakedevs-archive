import React from 'react'
import './App.css'
import Header from './components/Header.js'
import Navbar from './components/navbar/Navbar.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Courses from './components/Courses.js'
import Event from './components/Event.js'
import Mentorship from './components/Mentorship.js'
import Blog from './components/Blog.js'


const App = () => {
  return (
    <div className="main">
     <Navbar />
    <Header />
    <About />
    <Courses />
    <Event />
    <Mentorship />
    <Blog />
    <Footer />
    </div>
  )
}


export default App