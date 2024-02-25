"use client"
import React from 'react'
import { CiHeart } from "react-icons/ci";

const Card = ({item}) => {
    return (
        <div key={item.id} class="w-[500px] mt-8 h-[400px] rounded-[8px] bg-cover bg-center relative" style={{backgroundImage: "url('/images/most-search-car1.jpg')"}}>
            <div className='absolute top-3 left-3 bg-[#ff2325] p-2 rounded-sm text-white'>
                New
            </div>
            <div className='absolute right-2 bg-black top-2 z-50 opacity-50 backdrop-blur-md w-[25px] h-[25px] flex items-center justify-center rounded-full'>
            <CiHeart color='white'/>
            </div>
          <div className='absolute bottom-0 bg-black opacity-50 backdrop-blur-md w-full h-[90px]'>
            <div className='flex justify-between items-center p-5'>

           
            <div className='flex flex-col text-white'>
                <div>{item.title}</div>
                <div>{item.numberflat}</div>

            </div>

            <div className='flex items-center gap-2 text-white'>
                <div>{item.bitprice}</div>
                <div>{item.price}</div>

            </div>

            </div>

          </div>
        </div>


    )
}

export default Card