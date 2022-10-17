import React from 'react'
import Founder from '../assets/Founder.png'
import Green from '../assets/FounderAssets.png'
import Blue from '../assets/FounderAssetsblue.png'
import '../styles/Founder.css'

const Event = () => {
  return (
    <div className="founder">
      <img className="founder_assets_green" src={Green} alt="Kunal" />
      <img className="founder_assets_blue" src={Blue} alt="Kunal" />
      <img className="founder_img" src={Founder} alt="Kunal" />
      <div className="founder_text">
        <h2 className="founder_heading"><span>Founder: </span>Kunal Kushwaha </h2>
        <p className="founder_para">
        Kunal is a developer from India. He is working towards empowering communities via Open Source and Education. He is currently doing Developer Advocacy at Civo, community management at Major League Hacking, is a CNCF Ambassador, GitHub Campus Expert, Gold Microsoft Learn Student Ambassador, Google Summer of Code Mentor at Red Hat Middleware.

        </p>
      
      </div>
     </div>
  )
}

export default Event