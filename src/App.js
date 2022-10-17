import React from 'react'
import Header from './components/Header.js'
import Navbar from './components/navbar/Navbar.js'
import Podcast from './components/Podcast.js'
import Founder from './components/Founder.js'

const App = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <Podcast />
    <Founder />
  
    </div>

  )
}

export default App