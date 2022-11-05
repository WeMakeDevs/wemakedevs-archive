import React from 'react'
import Hashnode from '../../assets/Hashnode.png'
import Arrowright from '../../assets/Arrowright.png'
import SpecialTrack from '../../assets/Special_Track.png'
import Kubecon from '../../assets/Kubecon.png'

const Participate = () => {
  return (
    <>
    <div id="about" className="about">
      <img className="about_img" src={Hashnode} alt="About" />
      <div className="about_text">
        <h2>How to participate?</h2>
        <ul className="hashnode-ul">
          <li>Check out all the track provided below and write a blog on <br/> one or more of them on Hashnode.</li>
          <li>Add <span> #BlogsWithCC </span>on your blog tags section before  <br/> publishing it</li>
        </ul>
        <a href="#hashnode-tracks" >
          <button id="hashnode-check-tracks"> Check out the tracks <img className="arrowright" src={Arrowright} alt="arrowup" /> </button>
        </a>
      </div>
     </div>
     <div className="hashnode-participate-card">
      <div id="hashnode-tracks" className="hashnode-participate-card-1">
            <h3> Track Winners </h3>
            <p> Monthly winners from each track will be selected based on their blog on the topics. </p>
       </div>
       <div className="hashnode-participate-card-1">
            <h3> Grand Winners </h3>
            <p> For grand prize the number of blogs, and their quality will be taken into considertaion. </p>
      </div>
     </div>
     <div className="hashnode-participate-track">
      <img className="hashnode-participate-track-image" src={Kubecon} />
      <div className ="hashnode-participate-special-track">
       <h3> Kubecon </h3>
       <br />
       <p> Write a blog on your experiences in Kubecon 2022 & win Linux Foundation Training Voucher worth $499 . </p>
      </div>
     </div>
     </>
  )
}

export default Participate