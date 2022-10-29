import React from 'react'
import Navbar from '../components/Navbar.js'
import Events  from '../components/Event/Events.js'
import Footer from '../components/Footer'

const EventsPage = () => {
  return (
    <div>
        <Navbar />
        <Events />
        <Footer />
    </div>
  )
}

export default EventsPage