

import Nav from '../components/Nav'
import Laptop from '../assets/hero.jpg'
import Product from '../components/Product';
import OffSection from '../components/OffSection';
import Brand from '../components/Brand';
import Footer from '../components/Footer';
import Product2 from '../components/Product2.jsx';
const Home = () => {
    
  

        return (
          <div  className="container relative mx-auto">
            <Nav />
            <div className=" text-white relative  rounded-md mb-4">
              <div className="buy absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h2 className="  text-3xl font-bold">Grab Upto 50% Off On Selected Headphone</h2>
              </div>
              <Product />
              <img data-aos="fade-up" src={Laptop} alt="" />
            </div>
            <OffSection />
          <Product2 />
            <Brand />
            <Footer />


          </div>
        );
      
}

export default Home