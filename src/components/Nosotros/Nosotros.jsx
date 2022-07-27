import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Nosotros/Nosotros.css';

function Nosotros() {
  return (
    <div>
      <div className='container-fluid d-block containerWe'>
        <img className="mx-auto d-block logoPng" src={"./images/logo.png"} width="120" height="120" alt="Logo supermercado Ralphs"></img>
        <div className='container-fluid col-6 descriptionWe'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='container-md imgSuper'>
          <img className="img-fluid imgSuper" src={"./images/ImgSuper.jpg"} alt="Imagen de productos frescos de supermercado"></img>
        </div>
      </div>

      <div className='container-fluid d-block containerWe2'>
        <div className='container-fluid display-4 text-uppercase titleWe'>
          Nosotros
        </div>
        <div className='container-fluid col-6 descriptionWe'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  )
}

export default Nosotros;