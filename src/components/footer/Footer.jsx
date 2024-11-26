import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">
        Sourav Bhattacherjee
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/sourav.bhattacherjee.31">
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/sourav-bhattacherjee-9b4b82291/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/0sourav1998" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Sourav Tutorials , All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
