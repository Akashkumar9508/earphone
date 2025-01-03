import Home from './pages/Home'
import Cart from './components/Cart.jsx'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Brand from './components/Brand';
import OffSection from "./components/OffSection"
import Footer from './components/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product.jsx';
import Product2 from './components/Product2.jsx';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration:1500, 
      once: true, 
    })} ,[]);
  return (
    <BrowserRouter>
        <Routes>
            <Route path="cart" element={<Cart />} />
            <Route path="footer" element={<Footer />} />
            <Route path="off" element={<OffSection />} />
            <Route path="/" element={<Home />} />  
            <Route path="product" element={<Product />} />  
            <Route path="product2" element={<Product2 />} />  
        </Routes>
    </BrowserRouter>
  )
}

export default App