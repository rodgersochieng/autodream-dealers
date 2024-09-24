import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
          <p>Lets connect</p>
          <br></br>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={24} className="hover:text-secondary" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-secondary" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-secondary" />
          </a>
        </div>
        <p>
           Made with ❤️ by <a href="https://www.linkedin.com/in/ochieng-o-rodgers" className="text-white" target="_blank" rel="noopener noreferrer">Lazy Dev</a>
           </p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} AutoDream. All rights reserved.
            </p>
        {/* <p className="text-sm">&copy; 2024 Car Dealership. All rights reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
