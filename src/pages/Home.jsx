
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
          <div className="container mx-auto p-4">
            <Nav />
            <div className="bg-green-500 text-white p-4 rounded-md mb-4">
              <h2 className="text-2xl font-bold">Grab Upto 50% Off On Selected Headphone</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-md p-4 shadow-md">
                <img src="https://via.placeholder.com/200" alt="Wireless Earbuds" className="w-full mb-2" />
                <h3 className="text-lg font-semibold">Wireless Earbuds, IPX8</h3>
                <p className="text-gray-500">Original Sound, IPX8 Waterproof</p>
                <span className="text-lg font-bold">$89</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Add to Cart
                </button>
              </div>
      
              <div className="bg-white rounded-md p-4 shadow-md">
                <img src="https://via.placeholder.com/200" alt="AirPods Max" className="w-full mb-2" />
                <h3 className="text-lg font-semibold">AirPods Max</h3>
                <p className="text-gray-500">A perfect fit for music, movies, and podcasts</p>
                <span className="text-lg font-bold">$559</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Add to Cart
                </button>
              </div>
      
              <div className="bg-white rounded-md p-4 shadow-md">
                <img src="https://via.placeholder.com/200" alt="Bose BT Earphones" className="w-full mb-2" />
                <h3 className="text-lg font-semibold">Bose BT Earphones</h3>
                <p className="text-gray-500">Bass tone is perfectly balanced</p>
                <span className="text-lg font-bold">$289</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Add to Cart
                </button>
              </div>
      
              <div className="bg-white rounded-md p-4 shadow-md">
                <img src="https://via.placeholder.com/200" alt="VIVEFOX Headphones" className="w-full mb-2" />
                <h3 className="text-lg font-semibold">VIVEFOX Headphones</h3>
                <p className="text-gray-500">...</p>
                <span className="text-lg font-bold">$39</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Add to Cart
                </button>
              </div>
      
              {/* Add more product cards here */}
      
            </div>
          </div>
        );
      
}

export default Home