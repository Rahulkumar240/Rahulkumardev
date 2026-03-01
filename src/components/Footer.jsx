import React from 'react';

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaKaggle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between px-5 py-2.5 bg-black text-white text-sm font-sans">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-base text-gray-700">
          Rk
        </div>
        <span>Rahul Kumar</span>
      </div>
      <div className='flex space-x-8 mt-4 text-2xl'>
                <a href="https://www.linkedin.com/in/rahulkumar297/" target="_blank" rel="noopener noreferrer">
                  <CiLinkedin className='hover:text-blue-500 cursor-pointer' />
                </a>
      
                <a href="https://github.com/Rahulkumar240" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='hover:text-gray-400 cursor-pointer' />
                </a>
      
                <a href="https://leetcode.com/u/Rahulkumar9709/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className='hover:text-orange-500 cursor-pointer' />
                </a>
      
                <a href="https://www.kaggle.com/rahulkumar397" target="_blank" rel="noopener noreferrer">
                  <FaKaggle className='hover:text-[#00FFFF] cursor-pointer' />
                </a>
              </div>
    </div>
  );
};

export default Footer;
