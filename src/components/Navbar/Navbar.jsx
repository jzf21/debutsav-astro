
import logo from '../../assets/logo.svg'
import "./Navbar.css";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [scrollbar, setscrollbar] = useState(false);
  const [mobilenav, setmobilenav] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 50) {
  //     setscrollbar(true);
  //   } else {
  //     setscrollbar(false);
  //   }
  // };

  // window.addEventListener("scroll", handleScroll);
  const handleHamburger = () => {
    setmobilenav(!mobilenav);
  };

  return (
    <div
      className={`w-screen h-[70px] flex flex-row items-center justify-between px-6 md:px-0 md:justify-around py-3 fixed top-0 z-[2]  ${
        scrollbar ? "bg-white text-black" : "bg-white"
      }`}
    >
      <img src={logo} alt="true" className="h-[50px]" />
      <button
        onClick={handleHamburger}
        className="text-black text-4xl block md:hidden mr-3"
      >
        {mobilenav ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`text-black transition-all duration-300 ease-in-out font-medium md:static md:w-max md:h-max md:pt-0 md:bg-transparent md:block md:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center  items-center ${
          mobilenav
            ? "right-0 flex flex-col  gap-8 bg-white  "
            : "right-full flex flex-col gap-8 text-opacity-0  "
        }`}
      >
        <a href="/"
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
         
          onClick={handleHamburger}
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-yellow to-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Home
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/becomesponsor"
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-yellow to-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Sponsors
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="#events"
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-yellow to-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Events
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="#contact"
          onClick={handleHamburger}
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-yellow to-yellow bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact
          </span>
        </a>
        <button className="md:hidden block  register text-xl text-white bg-red px-10 py-2">
          Register Now
        </button>
      </div>
      <button className="md:block hidden register text-xl text-white bg-red px-10 py-2">
        <a to={"/sponsors"}>Register</a>
      </button>
    </div>
  );
};

export default Navbar;
