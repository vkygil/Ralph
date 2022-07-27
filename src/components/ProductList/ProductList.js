import React, { useState, useEffect } from 'react'
import "./ProductList.css"

function ProductList() {
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

    });
    let giveMeAccessKey = async () => {
        let res = await fetch('https://api.kroger.com/v1/connect/oauth2/token', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' +  process.env.REACT_APP_SECRETTING 
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

    // giveMeAccessKey()

    // ?filter.term=milk&filter.locationId=70381054&filter.limit=6&filter.category=Diary
    return (
        <div>
            <div className="row">
                {
                    productos.map(product => {
                        return (
                            <div className="col-sm-6  col-md-4 col-lg-3d-flex justify-content-around " key={product.description}>
                                <div className="card producto d-flex align-items-center">
                                    <img className='image' src={"./images/milk.png"}></img>
                                    <div className='body'>

                                        <p className='title'>{product.description}</p>
                                        <div className='d-flex justify-content-around align-items-center'>

                                            <span className='text-muted'>{product.categories[0]}</span>
                                            <span className='price'>{product.price}</span>
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
    )
}

export default ProductList