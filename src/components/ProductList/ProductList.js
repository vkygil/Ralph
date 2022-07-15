import React, { useState } from 'react'
import "./ProductList.css"

function ProductList() {
    const [productos, setProductos] = useState([
        {
            img: "./images/milk.png",
            title: "Leche entera fresca",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche fresca",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche enteras",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche fresca",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche enteras",
            subtitle: "Botella 1L",
            price: "1,99€"
        }, {
            img: "./images/milk.png",
            title: "Leche fresca",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
        {
            img: "./images/milk.png",
            title: "Leche enteras",
            subtitle: "Botella 1L",
            price: "1,99€"
        },
    ]);

    return (
        <div>
            <div className="row">
                {
                    productos.map(product => {
                        return (
                            <div className="col-sm-6  col-md-4 col-lg-3d-flex justify-content-around " key={product.title}>
                                <div className="card producto d-flex align-items-center">
                                    <img className='image' src={"./images/milk.png"}></img>
                                    <div className='body'>

                                        <p className='title'>Leche entera fresca</p>
                                        <div className='d-flex justify-content-around align-items-center'>

                                            <span className='text-muted'>Botella 1L</span>
                                            <span className='price'>1,99€</span>
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