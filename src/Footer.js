import React from "react";
import linkin from "./Assert/linkedin.png"
import github from "./Assert/github.png"
import footer from "./Footer.module.css"

function Footer() {
  return (
    <footer className={footer.footer}>
      <div className={footer.content}>
        <div className={footer.contact}>
          <h3>Contact Information</h3>
          <p>Email: gmail.com@gmail.com</p>
          <p>Phone: +1 (208) 603-8613</p>
        </div>
        <div className={footer.social}>
          <h3>Connect with Me</h3>
          <div className={footer.link} >
          <a  href="https://www.linkedin.com/in/kuan-hsueh-chen-337223223/" target="_blank" rel="noopener noreferrer">
            <img src={linkin} alt="" />
          </a>
          <a href="https://github.com/ooioiooGT" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" /> 
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
