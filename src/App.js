 import React,{ useState, useEffect} from 'react';
import './App.css';
import Cart from "./components/Cart/Cart";

function App() {
  const url = ''
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    //console.log(response.status)
    const responseJSON = await response.json()
    setTodos(responseJSON)

  }
  useEffect(() => {
    fetchApi()
  }, []  )
  
  return (
    <div className='App'>
    <Cart></Cart>
    </div>
  );
}

export default App;
