import React from 'react'
import CategoryButtons from './CategoryButtons';
import CategoryImages from './CategoryImage';
import { useState } from 'react';
import './CategoryList.css';
import Navbar from '../Navbar/Navbar';

function CategoryList() {
    const [show, setShow] = useState(true)

    const changeVisibility = (parametro) => {
    setShow(parametro)
    }
  return (
    <>
    <Navbar/>
      <div className="category-container">
        <div className="container mt-5 mb-5 justify-content-center">
          <h1 className="categoriesTitle">CATEGORÍAS</h1>
          {/* <div className='container d-flex justify-content-center mt-5 gap-5'>
          <button type="button" className="btn btn-primary btn-lg" id="btnVisibility" onClick={() => changeVisibility(true)}>Imagenes</button>
          <button type="button" className="btn btn-primary btn-lg" id="btnVisibility" onClick={() => changeVisibility(false)}>Botones</button>
          </div> */}
        </div>
      </div>
    <CategoryImages />
    <CategoryButtons />

    </>
  )
}

export default CategoryList;
