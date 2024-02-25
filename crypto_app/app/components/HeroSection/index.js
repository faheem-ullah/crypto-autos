"use client"
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
const menus=["Listings","How it works","blog","contact"]
const socialMediaIcons = [
    { id: 'facebook', icon: <FaFacebookF color='white'/>, link: 'https://www.facebook.com' },
    { id: 'twitter', icon: <FaTwitter color='white' />, link: 'https://www.twitter.com' },
    { id: 'instagram', icon: <FaInstagram  color='white'/>, link: 'https://www.instagram.com' },
    { id: 'linkedin', icon: <FaLinkedinIn color='white'/>, link: 'https://www.linkedin.com' },
    { id: 'whatsapp', icon: <FaWhatsapp color='white' />, link: 'https://www.whatsapp.com' },
  ];

const HeroSection = () => {
    const handleClick=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
  return (
    <div className='bg-black mt-10 w-full px-14 flex justify-between items-center mb-12'>
      <Image src={"/images/logo-ftr.png"} width={80} height={40}/>
      <div className='text-white'>
       {menus.map((items,index)=>(
        <>
         <span className='mx-2 uppercase cursor-pointer hover:text-orange-600' onClick={handleClick}>{items}</span>
        </>
       ))}
      </div>

      <div className='flex items-center'>
      {socialMediaIcons.map(({ id, icon, link }) => (
        <a className='mx-2' key={id} href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      ))}
    </div>

    </div>
  )
}

export default HeroSection