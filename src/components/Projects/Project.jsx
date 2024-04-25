import React, { useEffect, useState } from "react";
import "./Project.css";
import db from "../../firebase";
import { collection, getDocs, query } from "firebase/firestore";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({duration: 1000});
    const fetchProjects = async () => {
      const q = query(collection(db, "projects"));
      const snapShot = await getDocs(q);
      const projects = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projects);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="card-container">
        <h2>Projects I have worked on</h2>
        <p className="heading-para">Here are some projects I have worked on </p>
        <div className="card-outer-container">
          {projects.map((item) => (
            <div className="card" style={{ width: "18rem" }} key={item.id} data-aos="fade-right">
              <img src={item.Image} className="card-img-top" alt={item.Title} />
              <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <p className="card-text">{item.Description}</p>
                <a href={item.Link} className="btn btn-primary button">
                  Live-Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
