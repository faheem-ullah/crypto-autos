import React from 'react'

const MainSection = () => {
    return (
        <section className="bg-no-repeat text-white bg-left h-screen bg-black overflow-hidden flex justify-center items-center flex-col" style={{ backgroundImage: "url('/images/landingBg.png')" }}>
            <div>
                <p className='text-[14px] text-center'>THE CAR COMMUNITY FOR THE CRYPTO ELITE</p>
                <p className='text-[80px]'>Discover your next</p>
                <p className='text-[80px] text-center italic'>Luxury Car</p>
            </div>

            <div className="flex border-b-2 border-b-[#fff]  rounded-lg">
                <input
                    className="px-4 py-2 w-full rounded-lg bg-transparent focus:outline-none"
                    type="text"
                    placeholder="Start your search"
                />
                <button className="px-4 text-white bg-black rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="#fff">
            <path d="M19 19l-4.35-4.35M17 10a7 7 0 10-14 0 7 7 0 0014 0z"></path>
          </svg>
                </button>
            </div>
        </section>
    )
}

export default MainSection