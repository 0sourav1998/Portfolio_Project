import React from "react";
import "./stack.css";
import html from "../../assets/stack/HTML.png"
import css from "../../assets/stack/CSS.png"
import js from "../../assets/stack/Javascript.svg"
import react from "../../assets/stack/React.png"
import next from "../../assets/stack/Next.svg"
import ts from "../../assets/stack/Typescript.svg"
import tailwind from "../../assets/stack/Tailwind.png"
import node from "../../assets/stack/NodeJs.svg"
import express from "../../assets/stack/Express.png"
import mongo from "../../assets/stack/MongoDB.svg"
import mui from "../../assets/stack/MaterialUI.svg"
import git from "../../assets/stack/Git.svg"
import github from "../../assets/stack/Github.svg"
import docker from "../../assets/stack/Docker.svg"
import redux from "../../assets/stack/Redux.svg"
import vercel from "../../assets/stack/Vercel.svg"
import bootstrap from "../../assets/stack/Bootstrap.svg"
import chart from "../../assets/stack/ChartJs.svg"


const Stack = () => {
  return (
    <section>
      <h5>Which Technology I know?</h5>
      <h2 className="tech_stack">Tech Stack</h2>
      <div className="stack_container">
        <div>
          <p className="stack_para">
            Hi Everyone, My name is Souarv Bhattacherjee. I am a passionate Full
            Stack Web Developer who believes in learning through hands-on
            project building. I have been working on various projects like
            HireVelocity, Study-Notion, a chat app, an Instagram clone with
            real-time communication using Socket.io, a Netflix clone, and many
            more. With expertise in React, Node.js, and modern web technologies,
            I focus on building scalable, user-friendly applications that solve
            real-world problems.
          </p>
          <p  className="stack_para">
            Apart from developing impactful projects, I enjoy contributing to
            open-source projects and continuously honing my skills by staying
            up-to-date with the latest in tech.
          </p>
          <p  className="stack_para">
            I am currently exploring Next.js for its amazing capabilities in
            building performant applications and focusing on delivering
            beautiful UI-UX experiences.
          </p>
        </div>
        <div class="skill-container-right">
          <div class="logos-container">
            <img src={html} alt="" class="skills-logo" />
            <img src={css} alt="" class="skills-logo" />
            <img
              src={js}
              alt=""
              class="skills-logo"
            />
            <img
              src={ts}
              alt=""
              class="skills-logo"
            />
            <img src={react} alt="" class="skills-logo" />
            <img src={next} alt="" class="skills-logo" />
            <img src={node} alt="" class="skills-logo" />
            <img src={redux} alt="" class="skills-logo" />
            <img src={tailwind} alt="" class="skills-logo" />
            <img
              src={bootstrap}
              alt=""
              class="skills-logo"
            />
            <img
              src={mui}
              alt=""
              class="skills-logo"
            />
            <img src={express} alt="" class="skills-logo" />
            <img src={git} alt="" class="skills-logo" />
            <img src={github} alt="" class="skills-logo" />
            <img src={mongo} alt="" class="skills-logo" />
            <img src={vercel} alt="" class="skills-logo" />
            <img src={chart} alt="" class="skills-logo" />
            <img src={docker} alt="" class="skills-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
