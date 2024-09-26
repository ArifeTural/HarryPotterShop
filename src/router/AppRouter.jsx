import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from '../pages/Login';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar';
import PrivateRouter from './PrivateRouter';


const AppRouter = () => {
  return (
    //!BrowserRouter index.js de sebebi AuthProvider içinde react-router-doma ait yapıları kullanabilek.
    <>
    <Navbar/>
    <Routes>
   <Route path="/" element={<Login/>} />
   <Route path='/dashboard' element={<PrivateRouter/>}>
   <Route path="/dashboard" element={<Home/>} />
   <Route path="/dashboard/product" element={<Product/>} />
   <Route path="/dashboard/about" element={<About/>} />
   </Route>
  
   <Route path="*" element={<NotFound/>} />
    </Routes>
   </>
  )
}

export default AppRouter