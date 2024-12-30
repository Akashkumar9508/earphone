import { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setIsDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav data-aos="fade-down" className="bg-white border-b border-gray-200 relative z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={logoImg} className="h-10" alt="Logo" />

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex nav-links space-x-6">
          <NavLink to="/product">Categories</NavLink>
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
            What s New
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

        {/* Search Bar */}
        <div className="hidden md:flex search-bar relative">
          <input
            type="text"
            placeholder="Search Product"
            className="w-64 px-4 py-2 border border-gray-300 rounded-md"
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent p-2">
            <FaSearch className="text-gray-500" />
          </button>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex user-actions space-x-4">
          <NavLink
            to="/account"
            className="flex items-center text-gray-700 hover:text-blue-500"
          >
            <FaUser className="mr-2" />
            <span>Account</span>
          </NavLink>
          <NavLink
            to="/cart"
            className="flex items-center text-gray-700 hover:text-blue-500"
          >
            <FaShoppingCart className="mr-2" />
            <span>Cart</span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-4 p-4">
            <NavLink to="/product" onClick={toggleMobileMenu}>
              Categories
            </NavLink>
            <NavLink to="/deals" onClick={toggleMobileMenu}>
              Deals
            </NavLink>
            <NavLink to="/whats-new" onClick={toggleMobileMenu}>
              What s New
            </NavLink>
            <NavLink to="/delivery" onClick={toggleMobileMenu}>
              Delivery
            </NavLink>
          </ul>
          <div className="p-4">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/account"
                className="flex items-center text-gray-700 hover:text-blue-500"
                onClick={toggleMobileMenu}
              >
                <FaUser className="mr-2" />
                <span>Account</span>
              </NavLink>
              <NavLink
                to="/cart"
                className="flex items-center text-gray-700 hover:text-blue-500"
                onClick={toggleMobileMenu}
              >
                <FaShoppingCart className="mr-2" />
                <span>Cart</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
