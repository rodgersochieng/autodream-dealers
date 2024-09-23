import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">Car Dealership</a>
        </div>
        <div className="space-x-6">
          <a href="#cars" className="hover:text-secondary">Cars</a>
          <a href="#contact" className="hover:text-secondary">Contact</a>
          <a href="#about" className="hover:text-secondary">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
