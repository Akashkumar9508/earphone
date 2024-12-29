
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        })} ,[]);
  

  return (
    <div data-aos="fade-up" >Home</div>
  )
}

export default Home