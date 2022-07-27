import React, { useState } from "react";
import "../Cart/Cart.css";
import { FaTrash } from "react-icons/fa";
import Image from "../../images/mine.png";
import Image2 from "../../images/platano.png";
import "./Cart.css";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <div class="card-m-4">
          <div class="card-body">
            <div className="row">
              <div className="col-3">
                <img className="mine.png" src={Image} />
              </div>
              <div className="col-7 my-box">
                <h2 className="heading">Ensalada Verano</h2>
                <p className="cantidad">Cantidad</p>

                <div className="boxNumber">
                  <button>-</button>
                  <input
                    class="numberstyle"
                    type="number"
                    min="1"
                    step="1"
                    value="1"
                  ></input>
                  <button>+</button>
                </div>
              </div>
              <div className="col-2 my-trashBox">
                <FaTrash className="trash-icon" />
                <h3 className="euro">2€</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="card m-4">
          <div class="card-body">
            <div className="row">
              <div className="col-3">
                <img className="platano.png" src={Image2} />
              </div>
              <div className="col-7 my-box">
                <h2 className="heading">Plátano</h2>
                <p className="cantidad">Cantidad</p>

                <div className="boxNumber">
                  <button>-</button>
                  <input
                    class="numberstyle"
                    type="number"
                    min="3"
                    step="3"
                    value="3"
                  ></input>
                  <button>+</button>
                </div>
              </div>
              <div className="col-2 my-trashBox">
                <FaTrash className="trash-icon" />
                <h3 className="euro">1.80€</h3>
                
                <div className='TOTAL'>
                <p className="Total-p">TOTAL :</p>
                <h1 className="Precio">3.80€</h1>
                <a href="https://wa.me/34634108663?text=welcome in your mercado" class="btn btn-primary">PROCESO DE PAGO</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};
export default Cart;
