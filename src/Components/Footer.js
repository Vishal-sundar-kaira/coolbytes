import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-sm">
            Copyright ©2022 Foodlife
          </div>
          <div className="text-sm">
            <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;