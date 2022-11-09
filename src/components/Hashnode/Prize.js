import React from 'react'
import GrandPrice from '../../assets/Grand_Price.png'
import Lfx from '../../assets/LFX.png'
import './Hashnode.css'

const Price = () => {
  return (
    <>
    <div className="prize-heading">
     <h1> Current Prizes </h1>
     <br />
     <p> Below are the prizes for the current month’s blogging challenges. </p>
    </div>
    <br />
    <br />
    <div className="hashnode-container" >
      <div
   className="hashnode-card"
  >
      <section>
        <img src={GrandPrice} alt="banner" />
        <div className="hashnode-details">
          <p>Write with us and get chance to win Grand Price</p>
         
       </div>
       </section>
  </div>
  <div
   className="hashnode-card"
  >
      <section>
       <img src={Lfx} alt="banner" />
        <div className="hashnode-details">
          <p>Share your Kubecon Experience and get a chance to win Special Price.</p>
        </div>
      </section>
  </div>
  </div>
  </>
  )
}

export default Price