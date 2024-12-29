import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const Nav = () => {
    return (
        <nav className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center"> 
          <img src={logoImg} className='h-10' alt="" />
            <div className="logo-space w-24"></div> 
    
            <ul className="nav-links flex space-x-4">
              <li className="text-gray-700 hover:text-blue-500">Categories</li>
              <li className="text-gray-700 hover:text-blue-500">Deals</li>
              <li className="text-gray-700 hover:text-blue-500">Whats New</li>
              <li className="text-gray-700 hover:text-blue-500">Delivery</li>
            </ul>
    
            <div className="search-bar relative">
              <input 
                type="text" 
                placeholder="Search Product" 
                className="w-64 px-4 py-1 border border-gray-300 outline-none rounded-full" 
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent p-2">
                <FaSearch className="text-gray-500" />
              </button>
            </div>
    
            <div className="user-actions flex space-x-4">
              <button className="flex items-center text-gray-700 hover:text-blue-500">
                <FaUser className="mr-2" />
                <span>Account</span>
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-500">
                <FaShoppingCart className="mr-2" />
                <span>Cart</span>
              </button>
            </div>
          </div>
        </nav>
      );
}

export default Nav