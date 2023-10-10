import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>Email: myemail@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-social">
          <h3>Connect with Me</h3>
          {/* Add links to your social media profiles */}
          <a href="https://linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
