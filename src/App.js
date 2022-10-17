import React from 'react'
import './App.css'
import Header from './components/Header.js'
import Navbar from './components/navbar/Navbar.js'
import Footer from './components/Footer.js'


const App = () => {
  return (
    <div>
     <Navbar />
     <Header />
     <div className="main"><Footer /></div>
    </div>

export default App