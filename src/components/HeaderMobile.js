"use client";

import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 md:hidden">
      {/* Row 1: Menu, Logo, Icons */}
      <div className="flex items-center justify-between mb-4">
        <div className='flex items-center'>
          <button className="text-gray-700 text-2xl mr-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        
          <Link href="/">
            <div className="flex items-center space-x-1">
              <Image src="https://img-cdn-02.megaboutique.com.au/logo/logo202012512.png" alt="Mega Boutique" width={150} height={38} />
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4 pr-2">
          <Link href="https://www.megaboutique.com.au/contact" className="text-gray-700 hover:text-[#fc6d46]">
            <Image src="/icons/email.png" alt="Email" width={24} height={24} />
          </Link>
          <Link href="https://www.megaboutique.com.au/login" className="text-gray-700 hover:text-[#fc6d46]">
            <Image src="/icons/account.png" alt="Account" width={24} height={24} />
          </Link>
          <Link href="https://www.megaboutique.com.au/cart" className="relative text-gray-700 hover:text-[#fc6d46]">
            <Image src="/icons/cart.png" alt="Cart" width={20} height={20} />
            <span className="absolute top-[0] right-[-10px] bg-[#9EC152] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-300">3</span>
          </Link>
        </div>
      </div>
    
      {/* Row 2: Search Bar */}
      <div className="w-full">
        <div className="flex items-center border border-orange-500 rounded-full px-4 py-1 w-full">
          <input 
            type="text" 
            placeholder="Search everything for home..." 
            className="w-full outline-none text-gray-700"
          />
          <button className="text-orange-500 text-lg">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <MobileNav onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
