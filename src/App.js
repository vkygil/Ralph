 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Bootstrap.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//import components and views
import Product from './Vistas/Product';
import Login from './Vistas/Login';
import Cart from './Vistas/Cart';
import MainPage from './Vistas/MainPage';
import Navbar from './components/Navbar/Navbar';
import CategoryList from './components/CategoryList/CategoryList';

function App() {
  return (
    <div className="App">
         
         <MainPage/>
     
    </div>
  );
}

export default App;
