"use client";
import logo from "@/app/imgs/logo.svg";
import search from "@/app/imgs/search-icon.png";
import bitcoin from "@/app/imgs/bitcoin-icon.png";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faSearch,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBtc, setShowBtc] = useState(false);
  return (
    <nav className="flex items-center lg:px-[6%] px-[2%] border-b-[1px] border-solid border-[#333]">
      <div className=" lg:w-[30%] cursor-pointer flex relative border-r-[1px] lg:p-[1.5rem] p-[1rem] border-solid border-[#333]">
        <Image src={logo}></Image>
      </div>
      <div className="w-[60%] flex justify-center">
        <div className={`bg-[white] relative rounded-md lg:block hidden`}>
          <input
            className="rounded-md px-[1.3rem] py-[0.6rem] w-[22rem] placeholder-[#212529]"
            type="text"
            placeholder="Try 'Black Porsche 911'"
          />
          <div className="absolute right-[5%] top-[23%] cursor-pointer">
            <Image src={search}></Image>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowBtc(true)}
        className="lg:flex hidden text-[0.8rem] items-center border-r-[1px] border-l-[1px] cursor-pointer p-[1.5rem] border-[#333]"
      >
        <div>
          <Image src={bitcoin} height={20}></Image>
        </div>
        <p className="mx-1">BTC</p>
        <FontAwesomeIcon icon={faSortDown} style={{ marginBottom: "0.5rem" }} />
      </div>
      <div
        className="flex items-center lg:p-[0.9rem] text-[0.8rem] border-[#333] cursor-pointer"
        onClick={() => setShowMenu(true)}
      >
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "white", fontSize: "1.3rem" }}
          />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          style={{
            color: "white",
            marginRight: "0.7rem",
            marginLeft: "0.7rem",
          }}
        />
        <p>Menu</p>
      </div>
      <section
        className={`${
          showMenu ? "" : "translate-x-full"
        } fixed bg-[black] h-full lg:w-[23%] w-[50%] top-0 right-0 transition ease-in-out`}
      >
        <div
          className="flex justify-end items-center text-[0.6rem] p-[1.5rem] border-b-[1px] border-[#333] border-solid cursor-pointer"
          onClick={() => setShowMenu(false)}
        >
          <FontAwesomeIcon icon={faX} style={{ color: "white" }} />
          <p className="ml-1">Menu</p>
        </div>
        <ul className="cursor-pointer text-[0.8rem]">
          <li className="p-[0.7rem] text-[#ff2325] border-[1px] border-[#333]">
            VIEW ALL CARS
          </li>
          <li className="p-[0.7rem] hover:text-[#ff2325] border-[1px] border-[#333]">
            EXPLORE USED CARS
          </li>
          <li className="p-[0.7rem] hover:text-[#ff2325] border-[1px] border-[#333]">
            DEALERSHIPS
          </li>
          <li className="p-[0.7rem] hover:text-[#ff2325] border-[1px] border-[#333]">
            HOW IT WORKS
          </li>
          <li className="p-[0.7rem] hover:text-[#ff2325] border-[1px] border-[#333]">
            ABOUT US
          </li>
          <li className="p-[0.7rem] border-l-[1px] border-[#333] hover:text-[#ff2325]">
            BLOG
          </li>
          <button
            className={`p-[0.7rem] border-[1px] bg-[#ff2325] w-full border-none hover:text-[#ff2325] transition-all`}
          >
            LOGIN
          </button>
        </ul>
      </section>
      <section
        className={`${
          showBtc ? "" : "translate-x-full"
        } fixed bg-[black] h-full w-[23%] top-0 right-0 transition ease-in-out`}
      >
        <div
          className="flex justify-end p-[1.5rem] border-b-[1px] border-[#333] border-solid cursor-pointer"
          onClick={() => setShowBtc(false)}
        >
          <p>x</p>
        </div>
        <ul className="cursor-pointer">
          <li className="p-[0.7rem] hover:text-[#ff2325] border-[1px] border-[#333]">
            BTC-1
          </li>
          <li className="p-[0.7rem] hover:text-[#ff2325] border-[1px] border-[#333]">
            BTC-2
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
