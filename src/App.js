
import './App.css';
import "./Bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./Bootstrap.css"
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';
import MainPage from "./Vistas/MainPage";
import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />

      <div className='container'>
        <br /><hr />
        <h1>Product list:</h1>
        <ProductList />
      </div>
      <br /><hr />

      <ProductDetails />
      <Login />
      
      {/* <Routes>
      <Login></Login>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<Login />} />
      </Routes>  */}
    </div>
  );
}

export default App;
