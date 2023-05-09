import React from "react"
import {Link} from 'react-router-dom';


const Navar = () => {
  
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <h1 class="logo">
        <Link className="navbar-brand" to='/'>
          <span>IT</span>Rescue
        </Link>
      </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/About'>
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Services'>
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Contac'>
                Contacto
              </Link>
            </li>
          </ul>
          <span className="navbar-text header-social-links">
            <a className="twitter" href="https://twitter.com/?lang=es/" target="_blank" rel="noopener noreferrer" >
              <i className="bu bi-twitter"></i>
            </a>
            <a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" >
              <i className="bu bi-facebook" ></i>
            </a>
            <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" >
              <i className="bu bi-instagram"></i>
            </a>
            <a className="linkedin"  href="https://mx.linkedin.com/"  target="_blank" rel="noopener noreferrer">
              <i className="bu bi-linkedin"></i>
            </a>
          </span>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navar;
