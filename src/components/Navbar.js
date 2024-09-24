
import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white py-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src="/logo.svg" alt="AutoDream Dealership" className="h-8 mr-2" /> */}
          <span className="text-xl font-bold">AutoDream Dealership</span>
        </div>
        <nav className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <a href="mailto:info@autodrean.com" className="flex items-center hover:text-secondary transition-colors duration-300">
            <FaEnvelope className="mr-1" />
            <span className="hidden md:inline">info@autodrean.com</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center hover:text-secondary transition-colors duration-300">
            <FaPhoneAlt className="mr-1" />
            <span className="hidden md:inline">+1 (234) 567-890</span>
          </a>
        </nav>
        <button
          className="md:hidden text-white hover:text-secondary transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
