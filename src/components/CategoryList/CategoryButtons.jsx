import React from 'react';
import './CategoryButtons.css'

function CategoryButtons() {
  return (
    <>
    <div className='container' id="categoryButtonsContainer">
      <div className='d-flex flex-column flex-start p-4 gap-3'>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Frutas</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Congelados</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Verduras</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Panaderias</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Embutidos</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Pescado</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Carnes</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Frutos secos</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Bebidas alcoholicas</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Cuidado personal</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Platos preparados</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Cuidado infantil</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Snacks</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Bebidas</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Legumbres</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn">Limpieza</button>
      </div>
    </div>
    </>
  )
}

export default CategoryButtons;