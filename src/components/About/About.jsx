import React, { useEffect } from "react";
import "./About.css";
import { FaRegFileCode } from "react-icons/fa";
import { SiCodementor } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  },[])
  return (
    <>
      <div className="my-5 background">
        <div className="p-5 text-center">
          <div className="container py-5">
            <h1 className="text-body-emphasis about-text" data-aos="fade-right">
              Hi there! Myself Rishabh Shukla. Nice to meet you.
            </h1>
            <p className="col-lg-8 mx-auto lead about-text">
              I started learning web-development 3 years ago. When started
              learning React Oh my! fall in love in first sight. Build several
              projects to show case my skills also started mentoring students in
              React under reputed company. I'm quietly confident, naturally
              curious, and perpetually working on improving my chops.
            </p>
          </div>
        </div>
      </div>
      <div className="technology-container">
        <div className="dev-container">
          <div className="developer-container">
            <div className="code-icon" data-aos="fade-right">
              <FaRegFileCode className="code-logo" />
            </div >
            <div className="info-header">
              <h3>Frontend Developer</h3>
              <p className="heading-info" style={{ fontWeight: "normal" }}>
                Loves to bring ideas in real life.
              </p>
            </div>
            <div className="info-main">
              <div className="tecnologies">
                <p className="heading-info">Technologies I know</p>
                <ul className="list-items">
                  <li className="transperent">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/portfolio-1e188.appspot.com/o/images.png?alt=media&token=af953eb5-2e9c-47a7-b5cc-ed1ed082de19"
                      alt="html"
                      className="image-set"
                    />
                  </li>
                  <li>
                    <img
                      src=" https://mltxkaivvhud.i.optimole.com/w:799/h:315/q:mauto/f:best/https://innostax.com/wp-content/uploads/2023/09/firebase-react-native.webp"
                      alt="React firebase"
                      className="image-set"
                    />
                  </li>

                  <li>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/portfolio-1e188.appspot.com/o/tailwind.jpeg?alt=media&token=7888dc3a-b2ab-4d69-9a75-5b3f492c70fe"
                      alt="logo"
                      className="image-set"
                    />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/portfolio-1e188.appspot.com/o/bootstrap.png?alt=media&token=54aa5d9c-e2ae-4482-ab5c-e0552239b02a"
                      alt="bootstrap"
                      className="image-set"
                    />
                  </li>

                  <li>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/portfolio-1e188.appspot.com/o/git%20github.png?alt=media&token=8eb13dee-6e88-42b0-8d64-ad70d6f03695"
                      alt="git github"
                      className="image-set"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="mentor-container">
          <div className="developer-container">
            <div className="code-icon" data-aos="fade-left">
              <SiCodementor className="code-logo" />
            </div>
            <div className="info-header">
              <h3 style={{ textAlign: "center" }}>Mentor</h3>
              <p className="heading-info" style={{ fontWeight: "normal" }}>
                I genuinely care about people, and enjoy helping them work on
                their craft.
              </p>
            </div>
            <div className="info-main">
              <div className="tecnologies">
                <p className="heading-info">Mentor Stats</p>
                <ul className="list-items text">
                  <li className="info-text" style={{ textAlign: "center" }}>
                    Mentored <b>900+ student</b>.
                  </li>
                  <li className="info-text" style={{ textAlign: "center" }}>
                    Helped in project building.
                  </li>
                  <li className="info-text" style={{ textAlign: "center" }}>
                    Took doubts, taught core concepts of React like{" "}
                    <b>state management, React hooks, Redux</b> etc.
                  </li>
                  <li className="info-text" style={{ textAlign: "center" }}>
                    Helped student to grow in their carrer.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
