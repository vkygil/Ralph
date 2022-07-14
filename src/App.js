import React from 'react';
import './App.css';
import "./Bootstrap.css";
import { Routes, Route, Link } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";


function Sear() {
  return (
    <div className="App">
      <SearchBar placeholder="Buscar Productos" />
    </div>
  );
}


export default App;