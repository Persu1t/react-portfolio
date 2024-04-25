import React, { useEffect, useState } from "react";
import "./Contact.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { Bounce, toast } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  const [name, setName]= useState("");
  const [email, setEmail] = useState("");
  const [textMatter, setTextMatter] = useState("");

  useEffect(() =>{
    AOS.init({duration:1000})
  })
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicId = process.env.REACT_APP_PUBLIC_ID;

    const params = {
      from_name: name,
      from_email: email,
      to_name: "Rishabh Shukla",
      message: textMatter,
    }
    try {
      const sendEmail = await emailjs.send(serviceId, templateId, params, publicId);
      console.log(sendEmail);
      toast.success("Email send successfully! Wait for my response", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "light",
        transition: Bounce
      })
      setName('')
      setTextMatter('')
      setEmail('')
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong :(. Please try again later.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "light",
        transition: Bounce
      })
    }
  }
  return (
    <>
      <div className="form-container">
        <h2 style={{ textAlign: "center", color: "#ffffff" }}>Contact Me</h2>
        <p style={{ textAlign: "center", color: "#ffffff", fontSize:"larger" }}>Want to build something. Let's connect coffe from my side.</p>
        <form onSubmit={(e)=>handleSubmit(e)} data-aos="fade-right">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Your name
            </label>
            <input
              type="text"
              className="form-control transperent-form"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
              required
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your email address
            </label>
            <input
              type="email"
              className="form-control transperent-form"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              What do you want from me
            </label>
            <textarea
              className="form-control transperent-form"
              id="exampleFormControlTextarea1"
              rows="3"
              required
              value={textMatter}
              onChange={(e)=>setTextMatter(e.target.value)}
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
        <div className="social-action">
          <ul className="social-list">
            <li className="icon-container">
              <a
                href="https://www.linkedin.com/in/rishabh-shukla-472417230/"
                className="icon"
              >
                <SlSocialLinkedin />
              </a>
            </li>
            <li className="icon-container">
              <a href="https://twitter.com/Rishabh_8905" className="icon">
                <FaXTwitter />
              </a>
            </li>
            <li className="icon-container">
              <a href="https://github.com/Persu1t" className="icon">
                <FiGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
