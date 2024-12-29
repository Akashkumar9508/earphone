
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../components/Nav'
const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        })} ,[]);
  

  return (
    <Nav />
  )
}

export default Home