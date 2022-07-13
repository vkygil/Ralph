 
import './App.css';
// import "./Bootstrap.css"
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./Vistas/MainPage"
import Login from "./Vistas/Login"

import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <ProductDetails/>
        
      {/* <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<Login />} />
      </Routes>  */}
    </div>
  );
}

export default App;
