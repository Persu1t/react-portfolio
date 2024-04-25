import React from "react";
import './Hero.css';
import { HashLink as Link } from "react-router-hash-link";
import 'animate.css';

const Hero = () => {
  return (
    <>
      <div className="container my-5 bg-body-transperent">
        <div className="p-5 text-center bg-body-transperent rounded-3">
          <h1 className="text-body-emphasis "><div className="animate__animated animate__bounce job-title">Frontend Developer</div> and  <div className="animate__animated animate__bounce job-title">Mentor</div></h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            I am a threat to AI as a developer. Loves to build apps that is
            better than AI generated content and making new generation as myself by mentoring them.
          </p>
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-1e188.appspot.com/o/rishabh%20photo.jpg?alt=media&token=cf20c818-9553-4a87-a902-a80f21e21235"
              alt="rishabh" className="hero-image animate__animated animate__fadeIn"
            />
          </div>

          <div className="d-inline-flex gap-2 mb-5">
            <button
              className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill custom-btn"
              type="button"
            >
              <Link to="#contact" style={{textDecoration: 'none', color:'#ffffff'}}>Call to action</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
