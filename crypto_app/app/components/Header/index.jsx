'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";
import { MdCurrencyBitcoin } from "react-icons/md";
import Drawer from '../ui/drawer';
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 px-12 bg-black w-full border-b-[#333] border-b-1 border-b">
      <div className="flex items-center border-l-[#333] border-1 border-l">
        <Image src={'/images/logo.svg'} width={220} height={30} />
      </div>
      <div className="flex-grow max-w-xl mx-auto">
        <div className="relative">
          <input type="search" placeholder="Try ‘Black Porsche 911’" className="w-full px-4 py-2 pl-10 bg-white rounded-[4px] focus:outline-none focus:ring focus:border-blue-300" />
          <button className="absolute right-2 top-0 mt-2 ml-3">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 19l-4.35-4.35M17 10a7 7 0 10-14 0 7 7 0 0014 0z"></path>
            </svg>
          </button>
        </div>

      </div>
      <div className="flex items-center space-x-4 ">
        <div className="flex gap-1 items-center cursor-pointer " onClick={() => setIsOpen(prev => !prev)}>
          <MdCurrencyBitcoin color='white' />
          <button className="text-[12px] text-white rounded-full focus:outline-none">BTC</button>
          <FaCaretDown color='white' />

        </div>
        <div className='flex items-center gap-1 cursor-pointer' onClick={() => setIsShow(prev => !prev)}>
          <MdMenu color='white' />
          <span className='text-white text-[12px]'>Menu</span>
        </div>

      </div>
      <Drawer isOpen={isOpen} toggle={() => setIsOpen(prev => !prev)}>
        <div className='flex bg-black text-white flex-col text-[13px] mt-8 '>
          <p className='border-[#333] border-1 border px-2 py-2'>BTC 1</p>
          <p className='border-[#333] border-1 border px-2 py-2'>BTC 2</p>
        </div>
      </Drawer>

      <Drawer isOpen={isShow} toggle={() => setIsShow(prev => !prev)}>
        <div className='flex bg-black text-white flex-col text-[15px] mt-8 uppercase '>
        <p className='border-[#333] border-1 border px-2 py-3 text-orange-500'>View All Cars</p>
          <p className='border-[#333] border-1 border px-2 py-3 hover:text-orange-500 cursor-pointer'>Explore use cars</p>
          <p className='border-[#333] border-1 border px-2 py-3 hover:text-orange-500  cursor-pointer'>Dealership</p>
          <p className='border-[#333] border-1 border px-2 py-3 hover:text-orange-500  cursor-pointer'>How it works</p>
          <p className='border-[#333] border-1 border px-2 py-3 hover:text-orange-500  cursor-pointer'>About Us</p>
          <p className='border-[#333] border-1 border px-2 py-3 hover:text-orange-500  cursor-pointer'>Blog</p>
          
        </div>
        <div>
          <Button text="Login" color={"#ff2325"} width={"100%"} height={"50px"} onClick={()=>alert("Login")}/>
        </div>
      </Drawer>
    </nav>
  )
}

export default Header