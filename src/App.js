import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import './global.css';

//Pages
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/PageNotFound/Pagenotfound";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import About from "./Pages/About/About";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App;