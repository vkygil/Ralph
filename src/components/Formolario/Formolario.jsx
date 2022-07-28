import React from "react";
import "./style.css"

function Formolario() {
  return (
    <div class="contenedor">
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

    </div>
    <a href="https://login.yahoo.com/?.src=ymlang=es-ESdone=https%3A%2F%2Fmail.yahoo.com%2F%3Fguce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAAANLfdC2mcWwROZX3VAuZh3XVUKxL2HiSXPnXYhg6m_IrU4Auh2-GGoc09B3GXS-GJMojcOn5YiJRK3qLYV08XWdJUqWai-tJdCAL6mt4gNw_0-k1iAk7wfXmUm4Js-4lp98RnkXHPbaWFx_AwYQWPRImrZiGdchY-lQVvswsAPVface">
      <button className="btn-submit">Enviar Consulta</button>
    </a>
    
    
    
    </form>
</div>
   
  );
}

export default Formolario;
