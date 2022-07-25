import React from 'react';
import "../Navbar/Navbar.css";

function Navbar() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-logo">
            <Link to="/MainPage"><img className="img-fluid" src={"./images/logo.png"} width="100" height="100" alt="Logo supermercado Ralphs"></img></Link>
          </div>
          <form className="d-flex" role="search">
                  <input className="form-control" type="search" placeholder="Buscar productos" aria-label="Search"></input>
                  <button className="btn btn-outline-success" type="submit" id="navbarBtn"><i className="fa-solid fa-search"></i></button>
          </form>
          <div className="nav-item">
            <Link className="nav-link-icon px-2" to="/Cart"><i className="fa-solid fa-cart-shopping"></i></Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link-icon px-2" to="/Login"><i className="fa-solid fa-user"></i></Link>
          </div>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link pl-" to="/Category">Categorías<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pl-4" to="/Product">Productos</Link>
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