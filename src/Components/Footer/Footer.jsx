import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>© Eliott. All rights reserved.</p>
          <p>
            Developed by <strong>Laurent Begey</strong> • Distributed by{" "}
            <strong>ThemeWagon</strong>
          </p>
        </div>

        <div className="footer-right">
          <p>Built with Tailwind CSS & Alpine.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;