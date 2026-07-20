import React from 'react'
import './Work.css';
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";

const Work = () => {
  return (
   <div className="work-container">
  <div className="card card-large">
      <img src={image1} alt="" />  

    <div className="content">
      <div className="tags">
        <span>SaaS</span>
        <span>Figma</span>
        <span>Tailwind</span>
      </div>

      <h2>Novu — SaaS Dashboard</h2>

      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis, odit nam aperiam fugiat optio libero. Nisi, minus officiis eius odio tempora velit fugit at, id labore ut libero reiciendis!
      </p>

      <p>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ducimus repudiandae eligendi veritatis dicta quo fuga fugiat autem tempore perspiciatis illo doloremque est labore, molestiae eius, voluptatum ex aut quibusdam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, dicta beatae? Velit iusto nemo praesentium architecto, ipsa excepturi facere quisquam, reprehenderit a cumque sapiente? Laudantium!
      </p>

      <a href="/">View case study →</a>
    </div>
  </div>

  <div className="card">
     <img src={image2} alt="" /> 

    <div className="content">
      <div className="tags">
        <span>Fintech</span>
        <span>Landing Page</span>
      </div>

      <h2>Finlo — Fintech App</h2>

      <p>
       Marketing site and onboarding flow for a personal finance app targeting young professionals. Tailwind CSS + Alpine.js.
      </p>

      <a href="/">View case study →</a>
    </div>
  </div>

  <div className="card">
     <img src={image3} alt="" /> 

    <div className="content">
      <div className="tags">
        <span>Agency</span>
        <span>Animation</span>
      </div>

      <h2>Orea — Creative Agency</h2>

      <p>
       Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor to match their premium positioning.
      </p>

      <a href="/">View case study →</a>
    </div>
  </div>
</div>
  )
}

export default Work
