import React from "react";
import Navbar from '../Navbar/Navbar';
import "./Form.css"

function Formolario() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="contenedor">
        <form action="" className="form">
          <div className="">
            <div className="form-header">
              <h1 className="form-title">C<span>ontacto</span></h1>
            </div>

            <label for="nombre" className="form-label">Nombres:</label>
            <input type="text" id="nombre" class="form-input" placeholder="Escriba su nombre" />

            <label for="Direccion" className="form-label">Dirección:</label>
            <input type="text" id="Direccion" class="form-input" placeholder="Escriba su direccion" />

            <label for="Correo" className="form-label">Correo Electronico:</label>
            <input type="text" id="Correo" class="form-input" placeholder="Escriba su correo" />

            <label for="mensaje" className="form-label">Mensaje:</label>
            <textarea id="mensaje" type="text" class="form-textarea" placeholder="Aqui escriba su mensaje" />

            {/* <input type="Submit" className="btn-submit" value="Enviar Consulta" /> */}
            <a className=" paddingbox  button btn-submit" href="mailto:name@rapidtables.com">Emviar correo</a>


          </div>
        </form>
      </div>
    </div>

  );
}

export default Formolario;
