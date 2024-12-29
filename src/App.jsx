import Home from './pages/Home'
import Card from './components/Card'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brand from './components/Brand';
import OffSection from "./components/OffSection.jsx"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    })} ,[]);
  return (
    <>
    <Home  />
    <Brand />
    <Card />
    <OffSection />
    </>
  )
}

export default App