import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

//import components and views
import MainPage from './Vistas/MainPage';


function App() {
  return (
    <div className="App">
         <MainPage/>
    </div>
  );
}

export default App;
