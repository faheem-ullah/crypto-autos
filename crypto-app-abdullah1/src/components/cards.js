"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import bitcoin from "@/app/imgs/currency_bitcoin.png";
import euro from "@/app/imgs/currency_euro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Cards = ({ products, reverse }) => {
  const [cardNo, setCardNo] = useState(2.5);
  window.addEventListener(
    "resize",
    function (event) {
      console.log(window.innerWidth);
      if (this.window.innerWidth < 760) {
        setCardNo(1);
      } else {
        setCardNo(2.5);
      }
    },
    true
  );
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={cardNo}
      autoplay={{
        delay: 1000,
        waitForTransition: true,
        reverseDirection: reverse,
      }}
      speed={3000}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {products.map((el) => {
        return (
          <SwiperSlide>
            <div className=" flex justify-center items-center overflow-hidden rounded-lg">
              <div className="relative">
                <div className="w-full h-full absolute top-0 flex items-end pointer-events-none z-10">
                  <div className="w-full h-full absolute top-0 p-[1rem]">
                    <div className="flex justify-between">
                      <p className="bg-[#ff2325] py-2 px-3 rounded-md inline-block">
                        New
                      </p>
                      <FontAwesomeIcon
                        style={{
                          background: "black",
                          opacity: "50%",
                          padding: "0.5rem",
                          borderRadius: "100%",
                        }}
                        icon={faHeart}
                      />
                    </div>
                  </div>
                  <div className="bg-[#00000033] w-full backdrop-blur-[5px] p-[1rem] flex justify-between">
                    <div>
                      <h2>{el.name}</h2>
                      <h2>{el.model}</h2>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center pr-[0.5rem]">
                        <div>
                          <Image src={bitcoin}></Image>
                        </div>
                        <p className="ml-1">{el.bitcoin}</p>
                      </div>
                      <h1>|</h1>
                      <div className="flex items-center pl-[0.5rem]">
                        <div>
                          <Image src={euro}></Image>
                        </div>
                        <p className="ml-1">{el.price}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Image
                  className="hover:scale-110 cursor-pointer ease-in-out duration-1000"
                  style={{ borderRadius: "0.5rem" }}
                  src={el.img}
                ></Image>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Cards;
