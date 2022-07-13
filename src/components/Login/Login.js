import React from 'react';
import Image from '../../images/logo.png';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
  return (
    <>
      <img src={Image} alt="logo" />
      <h1>Identificate</h1>
      <form className="form">
        <h3>Correo electronico</h3>
        <div className="form-input">
          <label className="form-label">
            <input type="text" id="email" name="email" className="label-input" placeholder="Ejemplo@gmail.com"></input>
          </label>
        </div>
        <h3>Contraseña</h3>
        <div className="form-input">
          <label className="form-label">
            <input type="text" id="password" name="password" className="label-input" placeholder="xxxxxxxx"></input>
          </label>
        </div>
        <div className="signUp-btn">
          <button className="form-input-btn" type="submit">INGRESAR</button>
        </div>
        <sapn className="create-account">
          ¿Nuevo?<a href="#" className="Btn-account">Crear Cuenta</a>
        </sapn>
        <div className="signUp-google">
          <button className="form-input-btn2" type="submit"><FaGoogle />Ingresar con google</button>
        </div>
      </form>
    </>
  )
}

export default Login