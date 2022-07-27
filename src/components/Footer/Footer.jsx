import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div>
      <div class="footer-content">
      <ul class="socials">
            <li><a href="#"><i class="fa-brands fa-facebook"></i> </a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i> </a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i> </a></li>
            <li><a href="#"><i class="fa-brands fa-instagram-square"></i> </a></li>
            <li><a href="#"><i class="fa-solid fa-envelope"></i> </a></li>
        </ul>
      </div>
      <div class="footer-bottom">
        <div class="col-md-2">
          <h6 class="text-uppercase font-weight-bold">
            <a href="#" class="nodecoration text-white">
              Sobre Nosotros
            </a>
          </h6>
        </div>

        <div class="col-md-2">
          <h6 class="text-uppercase font-weight-bold">
            <a href="#" class="nodecoration text-white">
              Medios de pago
            </a>
          </h6>
        </div>

        <div class="col-md-2">
          <h6 class="text-uppercase font-weight-bold">
            <a href="#" class="nodecoration text-white">
              Politicos de cookies
            </a>
          </h6>
        </div>

        <div class="col-md-2">
          <h6 class="text-uppercase font-weight-bold">
            <a href="#" class="nodecoration text-white">
              Politicos de Privacidad
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
