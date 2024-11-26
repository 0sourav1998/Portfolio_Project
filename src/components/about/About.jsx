import React from "react";
import me from "../../assets/images.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={me} alt="" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icons" />
              <h5>Learning Hours</h5>
              <small>1000+ Hours of Practice</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icons" />
              <h5>End to End Projects</h5>
              <small>10+ Full-Stack Applications</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icons" />
              <h5>Projects</h5>
              <small>100+ Completed Projects</small>
            </article>
          </div>
          <div className="about_description">
            <p className="about_para">
              I’m a passionate full-stack developer who believes in learning
              through hands-on project building.Apart from working on various
              projects like HireVelocity, Study-Notion,I’ve developed chat
              app,Instagram clone with real-time communication using
              Socket.io,Netflix clone and many more.With expertise in
              React,Node.js,and web technologies,I focus on building
              scalable,user-friendly applications that solve real-world problem
              .
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
