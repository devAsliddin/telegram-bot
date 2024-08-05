import React, { useEffect } from "react";
import "./Header.css";
import logo from "/public/logo.jpg";
import { Link } from "react-router-dom";

const tel = window.Telegram.WebApp;
function EpicGamesHeader() {
  useEffect(() => {
    tel.ready();
  });
  return (
    <header className="epic-header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Store</a>
          </li>
          <li>
            <a href="/comingsoon">Community</a>
          </li>
          <li>
            <a href="/comingsoon">Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EpicGamesHeader;
