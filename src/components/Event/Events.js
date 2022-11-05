import React from 'react'
import './Events.css'
import Header from './Header'
import CardsList from './CardsList'
import { events } from './data'

const Events = () => {
  return (
    <>
      <Header />
      <CardsList events={events} />
    </>
  )
}

export default Events