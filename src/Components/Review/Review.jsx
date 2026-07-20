import React from "react";
import "./Review.css";


const Review = () => {
  return (
    <section className="review-container">
      <h5 className="review-heading">SOCIAL PROOF</h5>
      <h1 className="review-title">What clients say</h1>

      <div className="review-cards">
       
        <div className="review-card">
          <p>
            "Eliott delivered our redesign in record time and the quality blew
            us away. Our conversion rate jumped 28% in the first month.
            Absolutely recommend."
          </p>

          <div className="client">
            {/* <img src={img1} alt="Sarah Müller" /> */}

            <div>
              <h4>Sarah Müller</h4>
              <span>CPO, Novu</span>
            </div>
          </div>
        </div>

       
        <div className="review-card active">
          <p>
            "Working with Eliott is a dream. He asks the right questions, moves
            fast, and the final result always exceeds what we imagined. Our
            best hire of 2024."
          </p>

          <div className="client">
            {/* <img src={img2} alt="Thomas Renault" /> */}

            <div>
              <h4>Thomas Renault</h4>
              <span>Founder, Finlo</span>
            </div>
          </div>
        </div>

        
        <div className="review-card">
          <p>
            "We had a tight deadline and a vague brief. Eliott turned both into
            a polished site in under two weeks. Clean code, zero hand-holding
            needed."
          </p>

          <div className="client">
            {/* <img src={img3} alt="Camille Dufresne" /> */}

            <div>
              <h4>Camille Dufresne</h4>
              <span>Creative Director, Orea</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;