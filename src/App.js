 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Bootstrap.css";
import { Link, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './Vistas/MainPage'



function App() {
  return (
    <div className="App">
     
         <Navbar/>
         <MainPage/>
     
    </div>
  );
}

export default App;
