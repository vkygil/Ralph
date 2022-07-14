import React from 'react';
import Image from '../../images/logo.png';
import { FaGoogle } from 'react-icons/fa';
import useLogin from './useLogin';


const Login = () => {

  const { handleChange, values, handleSubmit } = useLogin();


  return (
    <>
      <img src={Image} alt="logo" />
      <h1>Identificate</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Correo electronico</h3>
        <div className="form-input">
          <label className="form-label">
            <input type="text" id="email" name="email" className="label-input" placeholder="Ejemplo@gmail.com"
              value={values.email} onChange={handleChange}></input>
          </label>
        </div>
        <h3>Contraseña</h3>
        <div className="form-input">
          <label className="form-label">
            <input type="password" name="password" className="label-input" placeholder="xxxxxxxx"
              value={values.password} onChange={handleChange}></input>
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