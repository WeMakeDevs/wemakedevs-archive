import React from 'react'
import Header  from '../components/Hashnode/Header.js'
import Cards from '../components/Hashnode/CardsList.js'
import Participate from '../components/Hashnode/Participate.js'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Tracks from '../components/Hashnode/Prize'

const Hashnode = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Participate />
      <Cards />
      <br />
      <Tracks />
      <Footer />
      
    </div>
  )
}

export default Hashnode