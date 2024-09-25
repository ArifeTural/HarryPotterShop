import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from '../pages/Login';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar';


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route path="/" element={<Login/>} />
   <Route path="/home" element={<Home/>} />
   <Route path="/product" element={<Product/>} />
   <Route path="/about" element={<About/>} />
   <Route path="*" element={<NotFound/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default AppRouter