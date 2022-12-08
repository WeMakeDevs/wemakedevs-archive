import React from 'react'
import Discord from '../../assets/Discord.png'
import  Youtube from '../../assets/youtube.png'
import ComingSoonNavbar from './ComingSoonNavbar.js'
import LinkedIn from '../../assets/Linkedin.png'
import Twitter from '../../assets/Twitter.png'


import "./Comingsoon.css"

const Header = () => {
  return (
    <>
    <ComingSoonNavbar />
    <section className="header_cont_1">
    <div className="header_cont_1_a">
      <p className="header_free_community"> 
         <span className="header_free">Coming Soon</span>
    </p>
    <p className="header_para_about">
    Stay tuned as the team is working hard to bring some exciting stuff. Till then you can join our socials for updates.
    </p>
    </div>
    <div className="header_cont_2_b">
          <a href='https://www.youtube.com/c/KunalKushwaha/' target="_blank"> <img className="header_cont_2_b_img_youtube" src={Youtube} alt="youtube" /> </a>
          <a href='https://discord.com/invite/wemakedevs' target="_blank"> <img className="header_cont_2_b_img_discord" src={Discord} alt="discord" /></a>
          <a href='https://mobile.twitter.com/WeMakeDevs' target="_blank"> <img className="header_cont_2_b_img_discord" src={  Twitter} alt="discord" /></a>
          <a href='https://www.linkedin.com/company/wemakedevs/' target="_blank"> <img className="header_cont_2_b_img_discord" src={ LinkedIn} alt="discord" /></a>
    </div>
    </section>
    </>
  )
}

export default Header
