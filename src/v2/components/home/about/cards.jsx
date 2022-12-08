import React from 'react'
import styles from './index.module.css'
import Card from "./Card"
import data from './data'


const cards = () => {
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        {...item}
      />
    )
  })
  return (
    <section className={styles["about-cards"]}>
    {cards}
    </section>
  )
}

export default cards