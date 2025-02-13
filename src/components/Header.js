"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import useDeviceCheck from "@/utils/useDeviceCheck";

const Header = () => {

  const { device } = useDeviceCheck();

  return (
    <header className="bg-white shadow-md py-4 border-b border-gray-300 hidden md:block">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="w-1/4 flex items-center">
          <Image
            src="https://img-cdn-02.megaboutique.com.au/logo/logo202012512.png"
            alt="Mega Boutique Logo"
            width={256}
            height={64}
          />
        </div>

        <div className={`relative ${device === 'ipad' ? 'w-1/3' : 'w-1/2'}`} >
          <input
            type="text"
            placeholder="Search everything for home..."
            className="py-2 px-4 border rounded-full border-[#fc6d46] w-full"
          />
          <FaSearch className="absolute right-4 top-3 text-[#fc6d46]" />
        </div>

        {/* Navigation with Hover Icons */}
        <nav className="w-1/4 flex space-x-6 justify-end">
          <ul className="flex space-x-6 items-center">
            <li className="nav-item flex flex-col items-center text-gray-700 hover:text-[#fc6d46]">
              <a href="https://www.megaboutique.com.au/contact" className="flex flex-col items-center">
                <div className="nav-icon contact"></div>
                <span className="text-sm mt-1">CONTACT</span>
              </a>
            </li>
            <li className="nav-item flex flex-col items-center text-gray-700 hover:text-[#fc6d46]">
              <a href="https://www.megaboutique.com.au/login" className="flex flex-col items-center">
                <div className="nav-icon account"></div>
                <span className="text-sm mt-1">ACCOUNT</span>
              </a>
            </li>
            <li className="nav-item flex flex-col items-center text-gray-700 hover:text-[#fc6d46] relative">
              <a href="https://www.megaboutique.com.au/cart" className="flex flex-col items-center">
                <div className="nav-icon cart relative">
                  <span className="absolute top-[12px] right-0 bg-[#9EC152] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-300">3</span>
                </div>
                <span className="text-sm mt-1">CART</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Custom Background Sprite CSS */}
      <style jsx>{`
        .nav-icon {
          width: 46px;
          height: 46px;
          background-image: url('https://img-cdn-02.megaboutique.com.au/icons/nate/Sprite.png');
          background-repeat: no-repeat;
          transition: transform 0.3s ease, background-position 0.3s ease;
        }

        /* Default sprite positions */
        .contact {
          background-position: 0 10px;
        }
        .account {
          background-position: -280px 10px;
        }
        .cart {
          background-position: -368px 10px;
        }

        /* Hover effect */
        .nav-item:hover .nav-icon {
          transform: translateY(-5px); /* Moves icon up */
        }
        .nav-item:hover .contact {
          background-position: 0 -30px;
        }
        .nav-item:hover .account {
          background-position: -280px -35px;
        }
        .nav-item:hover .cart .absolute {
          background-color: #fc6d46;
        }
      `}</style>
    </header>
  );
};

export default Header;
