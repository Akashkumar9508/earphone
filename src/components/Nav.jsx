import  { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setIsDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav data-aos="fade-down" className="bg-white border-b border-gray-200 relative z-20">
      {/* Space for logo */}
      <div className="container mx-auto px-8 py-4 flex justify-between items-center"> 
      <img src={logoImg} className='h-10' alt="" />
        <div className="logo-space w-24"></div> 

        <ul className="nav-links flex space-x-6 -ml-20">
          <NavLink to='/product' >Categories</NavLink>
          <li 
            className="relative" 
            onMouseEnter={() => handleMouseEnter(1)} 
            onMouseLeave={handleMouseLeave}
          >
            Deals 
            {isDropdownOpen === 1 && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2">
                <li className="p-2 hover:bg-gray-100">Daily Deals</li>
                <li className="p-2 hover:bg-gray-100">Flash Sales</li>
                <li className="p-2 hover:bg-gray-100">Weekend Offers</li>
              </ul>
            )}
          </li>
          <li 
            className="relative" 
            onMouseEnter={() => handleMouseEnter(2)} 
            onMouseLeave={handleMouseLeave}
          >
            Whats New 
            {isDropdownOpen === 2 && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2">
                <li className="p-2 hover:bg-gray-100">Latest Arrivals</li>
                <li className="p-2 hover:bg-gray-100">Featured Products</li>
              </ul>
            )}
          </li>
          <li 
            className="relative" 
            onMouseEnter={() => handleMouseEnter(3)} 
            onMouseLeave={handleMouseLeave}
          >
            Delivery 
            {isDropdownOpen === 3 && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2">
                <li className="p-2 hover:bg-gray-100">Track Order</li>
                <li className="p-2 hover:bg-gray-100">Shipping Information</li>
                <li className="p-2 hover:bg-gray-100">Delivery Options</li>
              </ul>
            )}
          </li>
        </ul>

        <div className="search-bar relative">
          <input 
            type="text" 
            placeholder="Search Product" 
            className="w-64 px-4 py-2 border border-gray-300 rounded-md" 
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent p-2">
            <FaSearch className="text-gray-500" />
          </button>
        </div>

        <div className="user-actions flex space-x-4">
          <NavLink to="/account"  className="flex items-center text-gray-700 hover:text-blue-500">
          <FaUser className="mr-2" />
          <span>Account</span>
          </NavLink>
          <NavLink to="/card" className="flex items-center text-gray-700 hover:text-blue-500">
          <FaShoppingCart className="mr-2" />
          <span>cart</span>
          </NavLink>
    
        </div>
      </div>
    </nav>
  );
};

export default NavBar;