import React from "react";
import Pro from "../Assert/IMG_3401.jpg";
import homePage from "./Homepage.module.css";

function HomePage() {
  return (
    <div className={homePage.homepage}>
      <div className={homePage.left}>
        <h1>Welcome to My Portfolio</h1>
        <p>Hello, my name is Gilber Chen. I am a Software Engeering & Project management</p>
      </div>
      <div className={homePage.right}>
        <img src={Pro} alt="" /> 
      </div>
    </div>
  );
}

export default HomePage;
