
import './App.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Bootstrap.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//import components and views
import MainPage from './Vistas/MainPage';
=======
import "./Bootstrap.css";
import Category from './components/Category/Category';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./Bootstrap.css"
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';
import MainPage from "./Vistas/MainPage";
import Login from './components/Login/Login';
>>>>>>> testBranch


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
         
         <MainPage/>
     
=======
      <Category />
      <ProductDetails/>
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
>>>>>>> testBranch
    </div>
  );
}

export default App;
