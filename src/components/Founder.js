import React from 'react'
import Founder from '../assets/Founder.png'
import Green from '../assets/FounderAssets.png'
import Blue from '../assets/FounderAssetsblue.png'
import Twitter from '../assets/Twitter.png'
import Instagram from '../assets/Instagram.png'
import LinkedIn from '../assets/Linkedin.png'
import '../styles/Founder.css'

const Event = () => {
  return (
      <div className="founder">
      <div className="founder_flex">
          <img className="founder_assets_green" src={Green} alt="Green" />
          <img className="founder_assets_blue" src={Blue} alt="Blue" />
          </div>
          <img className="founder_img" src={Founder} alt="Kunal" />
        <div className="founder_text">
            <h2 className="founder_heading"><span className="founder_span">Founder: </span>Kunal Kushwaha </h2>
            <p className="founder_para">
              Kunal is a developer from India. He is working towards empowering communities via Open Source and Education. He is currently doing Developer Advocacy at Civo, community management at Major League Hacking, is a CNCF Ambassador, GitHub Campus Expert, Gold Microsoft Learn Student Ambassador, Google Summer of Code Mentor at Red Hat Middleware.
            </p>
        <div className="founder_socials">
            <a href="https://twitter.com/kunalstwt" target="_blank"> <p className='founder-item'><img src={Twitter} alt="twitter" /></p> </a>
            <a href="https://www.linkedin.com/in/kunal-kushwaha/" target="_blank"> <p className='founder-item'><img src={LinkedIn} alt="linkedin" /></p> </a>
            <a href="https://www.instagram.com/kunalsig/" target="_blank"><p className='founder-item'><img src={Instagram} alt="instagram" /></p></a>
        </div>
        </div>
      </div>
  )
}

export default Event