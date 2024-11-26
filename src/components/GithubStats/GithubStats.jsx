import React from 'react'
import { AiFillPushpin } from "react-icons/ai";
import { FaFolder } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import "./github.css"

const GithubStats = () => {
  return (
    <section>
        <h5>My Github Stats</h5>
        <h2>Github</h2>
        <div className="github_content">
          <div className="github_cards">
            <article className="github_card">
              <AiFillPushpin className="github_icons" />
              <h5>Total Commits</h5>
              <small>250+</small>
            </article>
            <article className="github_card">
              <FaFolder className="github_icons" />
              <h5>Total Repositories</h5>
              <small>45+</small>
            </article>
            <article className="github_card">
              <AiFillThunderbolt className="github_icons" />
              <h5>Highest Streak</h5>
              <small>20+</small>
            </article>
          </div>
        </div>
    </section>
  )
}

export default GithubStats