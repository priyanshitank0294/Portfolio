import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">

      <div className="contact-left">
        <h5>GET IN TOUCH</h5>

        <h1>
          Let's work <br />
          together
        </h1>

        <p>
          I'm open to UI/UX and frontend missions, short or long-term.
          Landing page, full product redesign, or just a second pair of
          eyes — let's talk.
        </p>

        <div className="social">
          <div className="social-item">
            📧 hello@example.com
          </div>

          <div className="social-item">
            💼 linkedin.com/in/yourname
          </div>

          <div className="social-item">
            💻 github.com/yourname
          </div>
        </div>
      </div>

      <div className="contact-right">

        <form>

          <div className="row">

            <div className="input-box">
              <label>Name *</label>
              <input type="text" placeholder="Jane Smith" />
            </div>

            <div className="input-box">
              <label>Email *</label>
              <input type="email" placeholder="jane@email.com" />
            </div>

          </div>

          <div className="input-box">
            <label>Subject</label>
            <input type="text" placeholder="Project Inquiry" />
          </div>

          <div className="input-box">
            <label>Message *</label>
            <textarea
              rows="6"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;