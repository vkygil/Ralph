import React, {useState} from 'react';
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {

  let [collapse, setCcollapse] = useState(true)
  function setCheck(){
    setCcollapse(!collapse)
  };

  return (
  
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-logo">
            <Link to="/"><img className="img-fluid" src={"../images/logo.png"} width="80" height="80" alt="Logo supermercado Ralphs"></img></Link>
          </div>
          <form class="d-flex" role="search">
                  <input class="form-control" type="search" placeholder="Buscar productos" aria-label="Search"></input>
                  <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-search"></i></button>
          </form>
          <div className="nav-item">
            <Link className="nav-link-icon px-2" to="/Cart"><i className="fa-solid fa-cart-shopping"></i></Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link-icon px-2" to="/Login"><i className="fa-solid fa-user"></i></Link>
          </div>
          
          <button onClick={setCheck} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
          </button>
          <div  id="navbarSupportedContent" className={`navbar-collapse ${collapse ? "collapse" : ""}`}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link pl-4" to="/Category">Categorías<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pl-4" to="/Form">Contacto</Link>
              </li>
              <li className="nav-item">
                <div className="nav-link pl-4">Nosotros</div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )
}

export default Navbar