import React, { useEffect } from "react";
import './Company.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Company = () => {
  useEffect(() =>{
    AOS.init({duration: 1000});
  })
  return (
    <div>
      <div className="p-5 text-center bg-body-transperent rounded-3">
        <h1 className="text-body-emphasis">Proud to work with company:</h1>
        <img src="https://www.financialexpress.com/wp-content/uploads/2023/05/APIS-and-NxtWave-image-37-3.jpg" alt="coding-ninjas" className="coding-ninja-image" data-aos="fade-right"/>
      </div>
    </div>
  );
};

export default Company;
