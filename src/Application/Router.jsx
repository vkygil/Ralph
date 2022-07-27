import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import Login from "../components/Login/Login";
import Cart from "../components/Cart/Cart";
import Category from "../components/Category/Category";
import ProductList from "../components/ProductList/ProductList";
import CategoryList from "../components/CategoryList/CategoryList";
import Nosotros from "../components/Nosotros/Nosotros";

    export default function Router(){
        return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/images/logo.png" element={<App/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/Login" element={<Login/>}/>  
                    <Route path="/Category" element={<CategoryList/>}/>
                    <Route path="/Category/:id" element={<Category/>}/>
                    <Route path="/Product" element= {<ProductList/>}/>
                    <Route path="/Nosotros" element= {<Nosotros/>}/>
                </Routes>
            </BrowserRouter>
        )
    }