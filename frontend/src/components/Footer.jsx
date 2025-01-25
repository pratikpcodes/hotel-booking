import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} HotelBooking. All rights reserved.
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
