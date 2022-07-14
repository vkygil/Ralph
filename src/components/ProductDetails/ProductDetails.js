import React from "react";
import "./ProductDetails.css";
import img1 from "../../img/salmorejo.jpg"



function ProductDetails() {
  return (
    <div>
      <div className="container-sm">
        <div className="">
          <p className="">Conservas, caldos y cremas-Gazpacho y cremas</p>
          <img className="rounded" src={img1} alt=""></img>
        </div>
        <div className=" container-sm">
          <h2>Salmorejo al estilo cordobés Hacendado</h2>
          <p>Brick 1 L | 1,70 €/L</p>
          <h3>1,70 €/ud.</h3>
          <hr className=""></hr>
          <div className="">
            <div className="container-lg ">
              <input className="w-25 m-4 rounded" type='number' placeholder={1}></input>
            </div>
            <div className="container-lg ">
            <button className="btn-lg bg-danger text-color-white border-0 rounded-pill shadow-lg p-3 mb-5 rounded-pill ">AÑADIR AL CARRO</button>
            </div>
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
