import React,{useEffect} from 'react'
import Navbar from '../components/Navbar.js'
import Events  from '../components/Event/Events.js'
import Footer from '../components/Footer'

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div>
        <Navbar />
        <Events />
        <Footer />
    </div>
  )
}

export default EventsPage
