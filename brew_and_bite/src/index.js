import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/food/:itemNo' element={<Details/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout />} />
    

    </Route>
  </Routes>
 </BrowserRouter>
);


