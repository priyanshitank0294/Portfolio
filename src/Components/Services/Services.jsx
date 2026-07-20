import React from 'react'
import "./Services.css";
const Services = () => {
  return (
    <div className="container">
    <h4 className="heading">WHAT I DO</h4>
    <h1 className="text">Services</h1>
    <div className="my-card">
    
    <div className="cards">
        <h3>UI/UX Design</h3>
        <p>From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.</p>
    </div>
     <div className="cards-dark">
        <h3>Frontend Dev</h3>
        <p>Production-grade code with Tailwind CSS and Alpine.js. Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks.</p>
     </div> 
     <div className="cards">
        <h3>Landing Pages</h3>
        <p>High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scroll.</p>
     </div> 
    </div>
    </div>
  )
}

export default Services
