import './App.css';
import { BrowserRouter } from 'react-router-dom'; 
import { Routes,Route } from 'react-router-dom';
import Login from '../src/Components/Login/Login.js'
import Signup from '../src/Components/Signup/Signup.js'
import Map from '../src/Components/Map/Map.js'
import Home from '../src/Components/Home/Home.js'

function App() {
  return (
    <div classname="App">
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
