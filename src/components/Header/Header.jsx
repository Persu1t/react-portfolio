import React from 'react'
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-transperent">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#hero"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsd6LFHOLiLV3gotfp1GVCbAfohXZeJGF48A&s" alt="logo" className='mix-blend'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-container">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#experince">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#contact">Contact</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header