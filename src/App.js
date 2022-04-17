import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Views/Home';
import Cart from './Views/Cart';

const App = () => {
  return (
      <BrowserRouter>
        <Header/>
        <div className='App'>
          <Routes>
            <Route children path='/' element={<Home/>} />
            <Route children path='/cart' element={<Cart/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
