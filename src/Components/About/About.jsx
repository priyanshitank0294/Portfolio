import React from "react";
import "./About.css";
 import profile from "../../assets/profile.png"; 

const About = () => {
  return (
    <section className="about-container">

      <div className="about-image">
         <img src={profile} alt="Profile" /> 
      </div>

      <div className="about-content">
        <h5>ABOUT ME</h5>

        <h1>
          A bit about <br />
          who I am
        </h1>

        <p>
          I'm Eliott, a freelance designer and frontend developer based in
          Paris with 5 years of experience shipping digital products for
          startups, agencies, and scale-ups across Europe. I thrive at the
          intersection of great design and clean code.
        </p>

        <p>
          I believe great interfaces are invisible—they get out of the user's
          way. My work is fast, accessible and built to last. When I'm not
          coding, you'll find me hiking or hunting for a good espresso.
        </p>

        <h4>STACK & TOOLS</h4>

        <div className="skills">
          <span>Tailwind CSS</span>
          <span>Alpine.js</span>
          <span>Figma</span>
          <span>HTML / CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Bootstrap</span>
          <span>Git</span>
        </div>

      </div>

    </section>
  );
};

export default About;
