import React from "react";
import header from "./Header.module.css";

function Header() {
  return (
    <div className={header.header}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about"> About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/project">Project</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
