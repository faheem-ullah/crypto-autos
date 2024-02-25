"use client"
import React from 'react'

const menus=["Privacy Policy","Terms of Service","Cookies Settings"]

const Footer = () => {
  return (
    <div className='flex justify-between items-center w-full px-14 mb-12 border-t-[#333] border-t-2'>
        <div className='text-white mt-4 text-[14px]'>
        Copyright {new Date().getFullYear()}. All right reserved.
        </div>
        <div className='text-white mt-4'>
       {menus.map((items,index)=>(
        <>
         <span className='mx-2 text-[14px] cursor-pointer hover:text-orange-600' onClick={()=>{}}>{items}</span>
        </>
       ))}
      </div>
    </div>
  )
}

export default Footer