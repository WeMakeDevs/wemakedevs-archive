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
            © 2022 WeMakeDevs · All rights reserved.
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
                <a
                  href="http://blog.wemakedevs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/wemakedevs/roadmaps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Roadmaps
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/wemakedevs/eventst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col2-2">
            <h4>Community</h4>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/@WeMakeDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/wemakedevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/WeMakeDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/WeMakeDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wemakedevs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/WeMakeDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
