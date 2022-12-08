import React from "react";
// import Logo from "../../../assets/common/logo.svg";
import Youtube from "../../../assets/home/check.png";
import Discord  from "../../../assets/home/Discord.png";
import Github from "../../../assets/home/Github.png";
import Instagram from "../../../assets/home/Instagram.png";
import Twitter from "../../../assets/home/Twitter.png";
import LinkedIn from "../../../assets/home/Linkedin.png";
import Telegram from "../../../assets/home/Telegram.png";
import Gmail from "../../../assets/home/Gmail.png";

import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-col1">
        <p className="footer-p">
          Join our community
          </p>
        <div className="footer-buttons">
          <a
            href="https://t.me/WeMakeDevs"
            className="link-normal-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ Telegram } alt="telegram" /> Telegram
          </a>
          <a
            href="https://discord.gg/wemakedevs"
            className="link-normal-1"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={ Discord } alt="discord" /> Discord
          </a>
          </div>
          </div>
          <div className="footer-col2">
              <h1> Inspire, Educate,
              Empower
              </h1>
          </div>
      </div>
      <div className="footer-links">
      </div>
      <div className="footer-links-1">
      <div className="footer-links-2">
      <h2> WeMakeDevs </h2>
      </div>
      <div className="footer-links-3">
      <ul className="footer-links-3-1">
              <li>
                <a
                  href="https://www.youtube.com/@WeMakeDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <img src={Youtube} alt="youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/wemakedevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Discord} alt="discord" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/WeMakeDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <img src={LinkedIn} alt="linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/WeMakeDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wemakedevs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <img src={Instagram} alt="twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/WeMakeDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <img src={Github} alt="twitter" />
                </a>
              </li>
              <li>
                <a
                    href="mailto:kunal@wemakedevs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <img src={Gmail} alt="twitter" />
                </a>
              </li>
            </ul>
      </div>
      </div>
      <div className="footer-links">
       <p>© Copyrights by <span> WeMakeDevs </span>All Rights Reserved. </p>
      </div>
      <br />
      <br />
    </footer>
  );
};

export default Footer;
