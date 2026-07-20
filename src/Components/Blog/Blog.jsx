import React from "react";
import "./Blog.css";

import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";

const Blog = () => {
  return (
    <section className="blog-container">
      <div className="blog-header">
        <div>
          <h5 className="blog-subtitle">THOUGHTS</h5>
          <h1 className="blog-title">From the blog</h1>
        </div>

        <a href="/" className="blog-link">
          All articles →
        </a>
      </div>

      <div className="blog-cards">

       
        <div className="blog-card">
           <img src={blog1} alt="Blog 1" /> 

          <div className="blog-content">
            <div className="blog-meta">
              <span className="tag">Design</span>
              <span>Mar 8, 2025</span>
            </div>

            <h3>Why I ditched heavy CSS frameworks for Tailwind</h3>

            <p>
              After years of fighting specificity wars, here's what finally
              convinced me to make the switch.
            </p>

            <a href="/">Read more →</a>
          </div>
        </div>

       
        <div className="blog-card">
           <img src={blog2} alt="Blog 2" /> 

          <div className="blog-content">
            <div className="blog-meta">
              <span className="tag">Dev</span>
              <span>Feb 21, 2025</span>
            </div>

            <h3>Building a design system from scratch in a weekend</h3>

            <p>
              Tokens, components, docs — the process I follow to spin up a
              coherent system in 48 hours.
            </p>

            <a href="/">Read more →</a>
          </div>
        </div>

        
        <div className="blog-card">
           <img src={blog3} alt="Blog 3" /> 

          <div className="blog-content">
            <div className="blog-meta">
              <span className="tag">Freelance</span>
              <span>Jan 14, 2025</span>
            </div>

            <h3>5 lessons from my first year of full-time freelancing</h3>

            <p>
              Contracts, pricing, scope creep — the things nobody tells you
              before you go solo.
            </p>

            <a href="/">Read more →</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;