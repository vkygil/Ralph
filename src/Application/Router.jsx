import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import { CategoryList } from "../components/CategoryList/CategoryList";
import ProductList from "../components/ProductList/ProductList";
import Login from "../components/Login/Login";
import MainPage from "../Vistas/MainPage";
import Cart from "../Vistas/Cart";

    export default function Router(){
        return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="./images/logo.png" element={<MainPage/>}/>
                    <Route path="./Cart" element={<Cart/>}/>
                    <Route path="/Login" element={<Login/>}/>  
                    <Route path="/categoylist" element={<CategoryList/>}/>
                    <Route path="/favorites" element={<ProductList/>}/>   
                </Routes>
            </BrowserRouter>
        )
    }