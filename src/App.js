
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./Vistas/MainPage";
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <Login></Login>
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
