import React from "react";
import img1 from "../../assets/one.webp";
import spotify from "../../assets/Spotify-Clone.png"
import linkedin from "../../assets/linkedin-clone.png"
import studyNotion from "../../assets/Study-Notion.png"
import hireVelocity from "../../assets/Hire-Velocity.png"
import netflix from "../../assets/netflix-gpt.png"
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={spotify} alt="" />
          </div>
          <h3 className="portfolio_title">Advanced Spotify_Clone</h3>
          <h5 className="">Used Stacks : MERN + TYPESCRIPT + SOCKET.IO</h5>
          <div className="portfolio_item_cta">
            <a href="https://github.com/0sourav1998/Spotify-Clone" className="btn">
              Github
            </a>
            <a href="https://spotify-clone-final-t7x2.onrender.com/" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={linkedin} alt="" />
          </div>
          <h3 className="">Linkedin_Clone</h3>
          <h5 className="">Used Stacks : MERN Stack</h5>
          <div className="portfolio_item_cta">
            <a href="https://github.com/0sourav1998/Linkedin_Clone" className="btn">
              Github
            </a>
            <a href="https://linkedin-clone-zeta-opal.vercel.app/login" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={studyNotion} alt="" />
          </div>
          <h3 className="">LMS Portal _ Study-Notion</h3>
          <h5 className="">Used Stacks : MERN + Advanced technologies like Payment Integration with Razorpay</h5>
          <div className="portfolio_item_cta">
            <a href="https://github.com/0sourav1998/Study-Notion" className="btn">
              Github
            </a>
            <a href="https://study-notion-rho-fawn.vercel.app/" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={hireVelocity} alt="" />
          </div>
          <h3 className="">Hire Velocity</h3>
          <h5 className="">Used Stacks : MERN Stack</h5>
          <div className="portfolio_item_cta">
            <a href="https://github.com/0sourav1998/HireVelocity" className="btn">
              Github
            </a>
            <a href="https://hire-velocity.vercel.app/" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={netflix} alt="" />
          </div>
          <h3 className="">Netflix-Clone</h3>
          <div className="portfolio_item_cta">
            <a href="/github" className="btn">
              Github
            </a>
            <a href="/github" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
