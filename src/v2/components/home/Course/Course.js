import React from 'react'
import CardsList from './CardsList'
import { courses } from './data'
import './course.css'

const course = () => {
  return (
    <>
    
      <CardsList courses={courses}/>
    </>
  )
}

export default course