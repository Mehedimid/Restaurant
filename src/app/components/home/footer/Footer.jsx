import React from 'react';
import { FaPaperPlane, FaPinterestP, FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';
import insta1 from '../../../../../public/assets/unsplash_74yRjQ-cvNI.png'

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white lg:h-[550px] flex flex-col pt-12 lg:pt-0">
      <div className='flex-1 justify-center items-center flex '>
        <div className="container w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Column 1: Restaurant Info & Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 ">RESTAURANT</h3>
          <p className="text-sm mb-4">
            Subscribe our newsletter and get discount 25% off
          </p>
          <div className="relative w-full max-w-xs mb-6">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-white text-black w-full pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-0 top-0 h-full w-10 flex items-center justify-center bg-red-600 rounded-r-full hover:bg-red-700 transition-colors duration-200">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
<div className="flex space-x-4">
  <a href="#" className="w-8 h-8 hover:scale-110 transition-transform duration-300">
    <img src="https://i.postimg.cc/yN8jHPXP/image-76-1.png" alt="Twitter" className="w-full h-full object-contain" />
  </a>
  <a href="#" className="w-8 h-8 hover:scale-110 transition-transform duration-300">
    <img src="https://i.postimg.cc/pLZC478r/image-77.png" alt="Facebook" className="w-full h-full object-contain" />
  </a>
  <a href="#" className="w-8 h-8 hover:scale-110 transition-transform duration-300">
    <img src="https://i.postimg.cc/q7DLM31d/image-78-1.png" alt="Instagram" className="w-full h-full object-contain" />
  </a>
  <a href="#" className="w-8 h-8 hover:scale-110 transition-transform duration-300">
    <img src="https://i.postimg.cc/wvtktjrR/image-79.png" alt="YouTube" className="w-full h-full object-contain" />
  </a>
</div>

        </div>

        {/* Column 2: Contact us */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Contact us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <MdLocationOn className="mr-2 text-white" />
              <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
            </li>
            <li className="flex items-center">
              <MdPhone className="mr-2 text-white" />
              <span>(480) 555-0103</span>
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2 text-white" />
              <span>M.Alyaqpout@4house.Co</span>
            </li>
            <li className="flex items-center">
              <MdAccessTime className="mr-2 text-white" />
              <span>Sun - Sat / 10:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Links</h3>
          <ul className="space-y-2 text-sm flex-row flex flex-wrap md:flex-col gap-5 md:gap-0">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Our Menu</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Column 4: Instagram Gallery */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Instagram Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="https://i.postimg.cc/J47C1ZY0/unsplash-74y-Rj-Q-cv-NI.png" alt="Instagram 1" className="w-full h-auto object-cover rounded-sm" />
            <img src="https://i.postimg.cc/TYkMh1B9/unsplash-jeiqz-Ogww-KU.png" alt="Instagram 2" className="w-full h-auto object-cover rounded-sm" />
            <img src="https://i.postimg.cc/J47C1ZY0/unsplash-74y-Rj-Q-cv-NI.png" alt="Instagram 3" className="w-full h-auto object-cover rounded-sm" />
            <img src="https://i.postimg.cc/sxmFYgx3/unsplash-id-Tw-DKt2j2o.png" alt="Instagram 4" className="w-full h-auto object-cover rounded-sm" />
            <img src="https://i.postimg.cc/TYkMh1B9/unsplash-jeiqz-Ogww-KU.png" alt="Instagram 5" className="w-full h-auto object-cover rounded-sm" />
            <img src="https://i.postimg.cc/HW9CDB2F/unsplash-79-ZJS8p-V70.png" alt="Instagram 6" className="w-full h-auto object-cover rounded-sm" />
          </div>
        </div>
      </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-red-800 py-4 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p>&copy; Copyright 2025. All rights reserved</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Term of Use</a>
            <a href="#" className="hover:underline">Partner</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;