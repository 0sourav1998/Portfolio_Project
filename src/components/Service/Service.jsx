import React from "react";
import { BiCheck } from "react-icons/bi";
import "./service.css";

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer?</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Create intuitive, user-friendly interfaces using modern
                frameworks.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Ensure responsive designs for mobile, tablet, and desktop
                devices.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Use best practices for accessibility and cross-browser
                compatibility.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Implement dynamic and interactive UI components.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Leverage tools like React, Next.js, and Tailwind CSS for sleek
                designs.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Develop responsive and dynamic web applications from start to
                finish.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Integrate front-end and back-end technologies seamlessly.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Implement secure authentication and authorization mechanisms.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Design and maintain scalable database architectures.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Optimize web applications for performance and scalability.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Develop RESTful APIs and GraphQL endpoints for seamless data
                handling.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Implement robust server-side logic and architecture.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Ensure data security and privacy using encryption techniques.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Set up and manage database systems like MongoDB and PostgreSQL.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Deploy applications using cloud services like AWS and Render.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
