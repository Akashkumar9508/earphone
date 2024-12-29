import Home from './pages/Home'
import Card from './components/Card'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Brand from './components/Brand';
import OffSection from "./components/OffSection"
import Footer from './components/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product.jsx';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    })} ,[]);
  return (
    <BrowserRouter>
        <Routes>
            <Route path="card" element={<Card />} />
            <Route path="footer" element={<Footer />} />
            <Route path="off" element={<OffSection />} />
            <Route path="/" element={<Home />} />  
            <Route path="product" element={<Product />} />  
        </Routes>
    </BrowserRouter>
  )
}

export default App