 
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./Vistas/MainPage"
import Login from "./Vistas/MaiLoginnPage"
import Cart from "./Vistas/Cart"


function App() {
  return (
    <div className="App">
      <Cart></Cart>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
