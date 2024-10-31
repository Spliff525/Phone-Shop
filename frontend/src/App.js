
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import {BrowserRouter, Route, Routes, Redirect} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <NavBar/>
<Routes>
<Route exact path='/cart' element={<Cart/>}/>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/not-found'  element={<NotFound/>}/>

</Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
