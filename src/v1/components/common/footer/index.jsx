import React from "react";
import Logo from "../../../assets/common/logo.svg";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-col1">
          <img className="logo" src={Logo} alt="CC" />
          <p className="footer-p">
            © 2022 Community Classroom · All rights reserved.
          </p>
        </div>

        <div className="footer-col2">
          <div className="footer-col2-1">
            <h4>Sitemap</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="http://blog.wemakedevs.org">Blog</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3">
                  Courses
                </a>
              </li>
              <li>
                <a href="https://github.com/wemakedevs/roadmaps">Roadmaps</a>
              </li>
              <li>
                <a href="https://github.com/wemakedevs/eventst">Events</a>
              </li>
            </ul>
          </div>
          <div className="footer-col2-2">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="https://www.youtube.com/@WeMakeDevs" target="_blank">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://discord.gg/wemakedevs" target="_blank">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://t.me/WeMakeDevs" target="_blank">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/WeMakeDevs" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/wemakedevs/" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/WeMakeDevs" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
