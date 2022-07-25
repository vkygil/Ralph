import React from 'react'
import CategoryButtons from '../CategoryList/CategoryButtons';
import CategoryImages from '../CategoryList/CategoryImage';
import selectStyle from './StyleSelect';
import { useState } from 'react';
import './Category.css'


function Category() {
    const [show, setShow] = useState(true)

    const changeVisibility = (parametro) => {
    setShow(parametro)
    }
  return (
    <>
      <div className="container mt-5 mb-5 justify-content-center">
        <h1 className="categoriesTitle">CATEGORÍAS</h1>
        <div className='container d-flex justify-content-center mt-5 gap-5'>
        <button type="button" className="btn btn-primary btn-lg" id="btnVisibility" onClick={() => changeVisibility(true)}>Imagenes</button>
        <button type="button" className="btn btn-primary btn-lg" id="btnVisibility" onClick={() => changeVisibility(false)}>Botones</button>
        </div>
    </div>
    {show && (
    <div>
    <CategoryImages />
    </div>)}
    {!show && (
    <div>
    <CategoryButtons />
    </div>)}
    </>
  )
}

export default Category;