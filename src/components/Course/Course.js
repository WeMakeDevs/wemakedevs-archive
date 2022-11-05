import React from 'react'
import Header from './Header'
import CardsList from './CardsList'
import { courses } from './data'
import './course.css'

const course = () => {
  return (
    <>
      <Header />
      <CardsList courses={courses}/>
    </>
  )
}

export default course