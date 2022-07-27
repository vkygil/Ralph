import './App.css';
import "./Bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./Bootstrap.css"
import CategoryList from './components/CategoryList/CategoryList';


function App() {
    console.log(process.env);
  return (
    <div className="App">
      <CategoryList />
    </div>
  );
}

export default App;
