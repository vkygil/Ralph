import React from 'react'
import '../Header/Header.css'

function Header() {
  return (
    <div className='container-header'>
       <div className='container-fresh'>
         <img className="img-fluid fresh-product" src={"./images/fresh.png"}alt="Imagen de productos frescos de supermercado"></img>
       </div>  
       <div className='container-text'>
          <p className='slogan'>Productos Frescos y Orgánicos para ti </p>
          <p className='claim'>Todo lo que necesitas en un sólo click</p>
          <button type="button" class="btn-shop btn-primary">comprar</button>
       </div>
    </div>   
  )
}

export default Header