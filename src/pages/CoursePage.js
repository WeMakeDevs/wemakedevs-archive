import React,{useEffect} from 'react'
import Navbar from '../components/Navbar.js'
import Course  from '../components/Course/Course.js'
import Footer from '../components/Footer'

const CoursePage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div>
        <Navbar />
        <Course />
        <Footer />
    </div>
  )
}

export default CoursePage
