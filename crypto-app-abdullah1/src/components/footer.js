import logo_f from "@/app/imgs/logo-ftr.png";
import f from "@/app/imgs/facebook.png";
import i from "@/app/imgs/instagram.png";
import l from "@/app/imgs/linkedIn.png";
import w from "@/app/imgs/whats-app.png";
import t from "@/app/imgs/tweeter.png";
import Image from "next/image";
import { scrollTop } from "./factoryFunctions";
const Footer = () => {
  return (
    <footer className="px-[6%]">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:py-[3.5rem] py-[3rem] text-[0.8rem]">
        <div>
          <Image src={logo_f}></Image>
        </div>
        <ul className="flex lg:my-0 my-[1.5rem]">
          <li onClick={scrollTop}>LISTIGNS</li>
          <li onClick={scrollTop} className=" ml-[1.5rem] cursor-pointer">
            HOW IT WORKS
          </li>
          <li onClick={scrollTop} className="  ml-[1.5rem] cursor-pointer">
            BLOG
          </li>
          <li onClick={scrollTop} className="  ml-[1.5rem] cursor-pointer">
            CONTACT
          </li>
        </ul>
        <ul className="flex items-center">
          <div className="hover:opacity-50 transition ease-in-out cursor-pointer">
            <Image src={f}></Image>
          </div>
          <div className="ml-[1rem] hover:opacity-50 transition ease-in-out cursor-pointer">
            <Image src={i}></Image>
          </div>
          <div className="ml-[1rem] hover:opacity-50 transition ease-in-out cursor-pointer">
            <Image src={t}></Image>
          </div>
          <div className="ml-[1rem] hover:opacity-50 transition ease-in-out cursor-pointer">
            <Image src={l}></Image>
          </div>
          <div className="ml-[1rem] hover:opacity-50 transition ease-in-out cursor-pointer">
            <Image src={w}></Image>
          </div>
        </ul>
      </div>
      <div className="lg:py-[2rem] py-[1rem] border-t-[1px] border-solid border-white flex lg:flex-row flex-col items-center justify-between">
        <p>Copyright 2023. All right reserved.</p>
        <ul className="flex items-center lg:mt-0 mt-[0.2rem]">
          <li className="hover:text-[#ff2325] cursor-pointer">
            Privacy Policy
          </li>
          <li className="ml-[1rem] hover:text-[#ff2325] cursor-pointer">
            Terms of Service
          </li>
          <li className="ml-[1rem] hover:text-[#ff2325] cursor-pointer">
            Cookies Settings
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
