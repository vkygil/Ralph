import React from "react";
import "./CategoryImage.css";
import { useState } from "react";
import CategorySideBar from "./CategorySideBar";
import ProductList from "../ProductList/ProductList";
import { useEffect } from "react";
function CategoryImages() {
  const [show, setShow] = useState(true)

    const changeVisibility = (parametro) => {
    setShow(parametro)
    }

    const [productos, setProductos] = useState([
    ]);

    const [productos2, setProductos2] = useState([
        {
            img: "./images/milk.png",
            title: "Leche entera 1",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche fresca ",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche enteras 2",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche fresca 3",
            subtitle: "Botella 1L",
            price: "3,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche enteras 4",
            subtitle: "Botella 1L",
            price: "1,99€"
        }, {
            img: "./images/milk.png",
            title: "Leche fresca 5",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche enteras 7",
            subtitle: "Botella 1L",
            price: "2,99€"
        },
    ]);
    useEffect(() => {
        giveMeProductos()
    }, []);
    let giveMeAccessKey = async () => {
        let res = await fetch('https://api.kroger.com/v1/connect/oauth2/token', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + process.env.REACT_APP_SECRETTING
            },
            body: "grant_type=client_credentials&scope=product.compact",
        })
            .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
        return res.access_token;
    }

    async function giveMeProductos(text) {
        let accessToken = await giveMeAccessKey()

        // let accessToken = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2…M4FMOeoadvGfDvZq1YY2YlDsBmgtBE3wR3c2eUro5xJlv3r8w";
        let productsUrl = `${"https://api.kroger.com"}/v1/products?filter.term=${text}&filter.locationId=01400441`;
        // let productsUrl = `${process.env.REACT_APP_API_BASE_URL}/v1/products?filter.term=${"milk"}`;

        let productsResponse = fetch(productsUrl, {
            method: "GET",
            cache: "no-cache",
            headers: {
                Authorization: `bearer ${accessToken}`,
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data.data);
                setProductos(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    let findSize = (images) => {
        return images.find(el => el.perspective == "front")
            .sizes
            .find(el => el.size == "large")
            .url
    }

    
  return (<>
    {show && (<div className="container d-flex flex-row flex-wrap gap-5 d-none d-md-flex" id="categoryImagesContainer">
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de frutas variadas" src={"./images/Fruit.png"} onClick={() => {changeVisibility(false); giveMeProductos('Fruit')}}></img>
            <p className="mt-4 mb-0 categoryCardText">Frutas</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de productos congelados" src={"./images/Frosted.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Congelados</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de verduras variadas" src={"./images/Veggies.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Verduras</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de pan" src={"./images/Bread.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Panaderia</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de distintos tipos de embutido" src={"./images/Sausage.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Embutido</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de pescado" src={"./images/Seafood.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Pescado</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de carnes" src={"./images/Meat.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Carnes</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de frutos secos" src={"./images/DN.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Frutos secos</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varias botellas de alcohol" src={"./images/Alcohol.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Alcohol</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios productos de cuidado personal" src={"./images/Hygiene.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Cuidado personal</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios productos precocinados" src={"./images/Premadefood.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Platos preparados</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de productos de cuidado infantil" src={"./images/Lotions.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Cuidado infantil</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de snacks(Doritos, Lays, etc)" src={"./images/Junkfood.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Snacks</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varias bebidas refrescantes" src={"./images/Soda.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Bebidas</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de legumbres" src={"./images/Beans.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Legumbres</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios productos de limpieza" src={"./images/Cleaning.png"}></img>
            <p className="mt-4 mb-0 categoryCardText">Limpieza</p>
          </div>
        </div>)}
        {(!show &&
          <CategorySideBar/>
        )}
        <div>
            <div className="row">
                {
                    productos.map(product => {
                        return (
                            <div className="col-sm-6  col-md-4 col-lg-3d-flex justify-content-around " key={product.description}>
                                <div className="card producto d-flex align-items-center">
                                    {/* <img className='image' src={"./images/milk.png"}></img> */}
                                    <img className='image' src={findSize(product.images)}></img>
                                    <div className='body'>

                                        <p className='title'>{product.description}</p>
                                        <div className='d-flex justify-content-around align-items-center'>

                                            <span className='text-muted'>{product.categories[2]}</span>
                                            {/* <span className='price'>{"product.price"}</span> */}
                                        </div>
                                    </div>
                                    <div className='cart'>
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
  );
}

export default CategoryImages;