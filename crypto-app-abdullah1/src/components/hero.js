"use client";
import React, { useState } from "react";
import Cards from "@/components/cards";
import data from "@/components/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import search_w from "@/app/imgs/search-icon-wh.png";
import Image from "next/image";

const Hero = () => {
  const arr = data;
  const [reverse, setReverse] = useState(false);
  return (
    <div>
      <div className="bg-[url('./imgs/landingBg.png')] bg-left min-h-[90vh] bg-no-repeat flex flex-col justify-center items-center">
        <p className="tlg:text-[1rem] text-[0.8rem]">
          THE CAR COMMUNITY FOR THE CRYPTO ELITE
        </p>
        <h2 className="lg:text-[60px] text-[3rem] text-center leading-[4rem] my-[1rem]">
          Discover your next <br></br>
          <span className="italic my-class">Luxury Car</span>
        </h2>
        <div className="flex justify-between items-center py-[1rem] border-b-[1px] border-white border-solid">
          <p>Start your search</p>
          <div className="ml-[5rem] cursor-pointer">
            <Image src={search_w}></Image>
          </div>
        </div>
      </div>
      <div className="flex px-[1.5rem] justify-between border-t-[1px] border-b-[1px] border-[#333] items-center">
        <h2 className="py-[1.5rem]">Popular Listing</h2>
        <div className="flex">
          <p
            className=" border-[1px] border-[#333] p-[1.5rem] px-[2rem] cursor-pointer"
            onClick={() => setReverse(true)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </p>
          <p
            className="p-[1.5rem] cursor-pointer"
            onClick={() => setReverse(false)}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
      </div>
      {arr && (
        <div className="lg:ml-[1.5rem] lg:mx-0 mx-[1rem] mt-[2rem]">
          <Cards products={arr} reverse={reverse} />
        </div>
      )}
    </div>
  );
};

export default Hero;
