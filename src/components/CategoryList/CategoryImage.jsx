import React from "react";
import "./CategoryImage.css";

function CategoryImages() {
  return (
      <div className="container d-flex flex-row flex-wrap" id="categoryImagesContainer">
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de frutas variadas" src={"./images/Fruit.png"}></img>
            <p className="categoryCardText">Frutas</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de productos congelados" src={"./images/Frosted.png"}></img>
            <p className="categoryCardText">Congelados</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de verduras variadas" src={"./images/Veggies.png"}></img>
            <p className="categoryCardText">Verduras</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de pan" src={"./images/Bread.png"}></img>
            <p className="categoryCardText">Panaderia</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de distintos tipos de embutido" src={"./images/Sausage.png"}></img>
            <p className="categoryCardText">Embutido</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de pescado" src={"./images/Seafood.png"}></img>
            <p className="categoryCardText">Pescado</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de carnes" src={"./images/Meat.png"}></img>
            <p className="categoryCardText">Carnes</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de frutos secos" src={"./images/DN.png"}></img>
            <p className="categoryCardText">Frutos secos</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varias botellas de alcohol" src={"./images/Alcohol.png"}></img>
            <p className="categoryCardText">Alcohol</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios productos de cuidado personal" src={"./images/Hygiene.png"}></img>
            <p className="categoryCardText">Cuidado personal</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios productos precocinados" src={"./images/Premadefood.png"}></img>
            <p className="categoryCardText">Platos preparados</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de productos de cuidado infantil" src={"./images/Lotions.png"}></img>
            <p className="categoryCardText">Cuidado infantil</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de snacks(Doritos, Lays, etc)" src={"./images/Junkfood.png"}></img>
            <p className="categoryCardText">Snacks</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varias bebidas refrescantes" src={"./images/Soda.png"}></img>
            <p className="categoryCardText">Bebidas</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de legumbres" src={"./images/Beans.png"}></img>
            <p className="categoryCardText">Legumbres</p>
          </div>
          <div className="card border-0 mx-auto">
            <img className="categoryCardImage" alt="Fotografía de varios productos de limpieza" src={"./images/Cleaning.png"}></img>
            <p className="categoryCardText">Limpieza</p>
          </div>
        </div>
  );
}

export default CategoryImages;