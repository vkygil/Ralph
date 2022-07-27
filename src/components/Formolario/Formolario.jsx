import React from "react";
import "./style.css"

function Formolario() {
  return (
    <div className="contenedor">
     <form action="" class="form">
    <div class="">
        <div class="form-header">
            <h1 class="form-title">C<span>ontacto</span></h1>
        </div>

        <label for="nombre" class="form-label">Nombres:</label>
        <input type="text" id="nombre" class="form-input" placeholder="Escriba su nombre"/> 
        
        <label for="Direccion" class="form-label">Dirección:</label>
        <input type="text" id="Direccion" class="form-input" placeholder="Escriba su direccion"/> 

        <label for="Correo" class="form-label">Correo Electronico:</label>
        <input type="text" id="Correo" class="form-input" placeholder="Escriba su correo"/>

        <label for="mensaje" class="form-label">Mensaje:</label>
        <textarea  id="mensaje" type="text" class="form-textarea" placeholder="Aqui escriba su mensaje"/>

        <input type="Submit" class="btn-submit" value="Enviar Consulta"/>  
    </div>
    </form>
</div>
   
  );
}

export default Formolario;
