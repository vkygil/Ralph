import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Bootstrap.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
