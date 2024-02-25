"use client"
import React from 'react'
import Card from '../ui/card'

import CustomSlider from '../ui/Swiper';
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const data = [
    {
        id: 1,
        title: "PORSCHE",
        price: "$ 12300",
        bitprice: "B 1235",
        numberflat: "718"
    },
    {
        id: 2,
        title: "PORSCHE",
        price: "$ 12300",
        bitprice: "B 1235",
        numberflat: "718"
    },
    {
        id: 3,
        title: "PORSCHE",
        price: "$ 12300",
        bitprice: "B 1235",
        numberflat: "718"
    },
    {
        id: 4,
        title: "PORSCHE",
        price: "$12300",
        bitprice: "B1235",
        numberflat: "718"
    },
]


const Courosal = () => {
    const sliderRef = React.useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
      };
    
      const prev = () => {
        sliderRef.current.slickPrev();
      };
    return (
        <div className=' bg-black '>
            <div className='border-t-[#444] flex justify-between items-center border-t border-1 border-b-[#444] border-b border-1 w-full px-4 py-6'>
                <div className='text-white text-[30px]'>
                    <span className='italic'>Popular</span> listings
                </div>
                <div className='flex items-center gap-3'>
                   <div className='p-4 cursor-pointer flex justify-center items-center border-1 border-1-[#333] border' onClick={prev}>
                   <GrFormPreviousLink color='white' fontSize={30}/>
                   </div>
                   <div className='p-4 cursor-pointer flex justify-center items-center border-1 border-1-[#333] border' onClick={next}>
                   <GrFormNextLink color='white' fontSize={30}/>
                   </div>
                </div>
            </div>
            <CustomSlider slideref={sliderRef}>
                {
                    data.map(x => (
                        <>
                            <Card item={x} />
                        </>
                    ))
                }
            </CustomSlider>
        </div>
    )
}

export default Courosal