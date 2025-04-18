import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer-vertical">
      <div className="footer-column left-column">
        <h3>Socials</h3>
        <a href="https://github.com/dnikashov" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        <a href="https://www.linkedin.com/in/daniel-nikashov" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        <a href="https://instagram.com/daniel_nik1" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
      </div>

      <div className="footer-column center-column">
        <h3>Get in Touch</h3>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </div>

      <div className="footer-column right-column">
        <h3>Pages</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </footer>

  );
};

export default Footer;
