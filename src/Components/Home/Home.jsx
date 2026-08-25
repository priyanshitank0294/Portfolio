import React from "react";
import "./Home.css";
import profile from "../../assets/profile.png";

const Home = () => {
  return (
    <section className="home">

      <div className="left">

        <p className="available">
          AVAILABLE FOR WORK
        </p>

        <h1>
          Hi, I'm <span>Priyanshi</span>
        </h1>

        <h2>
          Freelance UI/UX Designer & Frontend Developer.
        </h2>

        <p className="description">
          I design and build digital products that people love
          to use — fast, clean and accessible.
        </p>

        <div className="buttons">
          <button className="work-btn">
            View my work ↓
          </button>

          <button className="contact-btn">
            Get in touch
          </button>
        </div>

        <div className="stats">

          <div>
            <h3>34+</h3>
            <p>Projects done</p>
          </div>

          <div>
            <h3>21+</h3>
            <p>Happy clients</p>
          </div>

          <div>
            <h3>5y</h3>
            <p>Experience</p>
          </div>

        </div>

      </div>

      <div className="right">

        <img src={profile} alt="profile"/>

        <button className="project-btn">
          Open to projects
        </button>

      </div>

    </section>
  );
};

export default Home;