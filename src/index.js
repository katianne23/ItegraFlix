import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './pages/Home';
import Details from './pages/DetailsMovie';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';



ReactDOM.render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


