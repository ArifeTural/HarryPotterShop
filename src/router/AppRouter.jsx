import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import ProductDetail from "../pages/ProductDetail";


const AppRouter = () => {
  return (
    //* AuthProvider içinde react-router-dom'a ait yapıları kullanabilmek için index.js'e taşıdık
    // <BrowserRouter>
    <>
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/products" element={<Product/>} />
          <Route path="/dashboard/products/:id" element={<ProductDetail />} />
          {/* //* Absolute path */}
          <Route path="/dashboard/about" element={<About />} />
          {/* //* relative path */}
          {/* <Route path="about" element={<About />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  );
};

export default AppRouter;