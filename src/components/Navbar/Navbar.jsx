
import logo from '../../assets/debutsav.svg'
import "./Navbar.css";
import { useState } from "react";




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
      <a href='/'><img  src={logo} alt="true" className="h-[50px]" /></a>
      <button
        onClick={handleHamburger}
        className="text-black text-4xl block md:hidden mr-3"
      >
        {mobilenav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M19.8 4.8l-0.6-0.6c-0.4-0.4-1-0.4-1.4 0L12 10.6 5.2 3.8c-0.4-0.4-1-0.4-1.4 0l-0.6 0.6c-0.4 0.4-0.4 1 0 1.4L10.6 12 3.8 18.8c-0.4 0.4-0.4 1 0 1.4l0.6 0.6c0.4 0.4 1 0.4 1.4 0L12 13.4l6.8 6.8c0.4 0.4 1 0.4 1.4 0l0.6-0.6c0.4-0.4 0.4-1 0-1.4L13.4 12l6.8-6.8c0.4-0.4 0.4-1 0-1.4z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        )}
      </button>
      <div
        className={`text-black transition-all duration-300 ease-in-out font-medium md:static md:w-max md:h-max md:pt-0 md:bg-transparent md:block md:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center  items-center ${
          mobilenav
            ? "right-0 flex flex-col  gap-8 bg-white  "
            : "right-full flex flex-col gap-8 text-opacity-0  "
        }`}
      >
        <a
          href="/"
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          onClick={handleHamburger}
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Home
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/#speakers"
          onClick={handleHamburger}
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Speakers
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/becomesponsor"
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Sponsors
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/Schedule"
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Event
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/#contact"
          onClick={handleHamburger}
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact
          </span>
        </a>
        <button className="md:hidden block  register text-xl text-white bg-red px-10 py-2">
          <a href={"/Register"}>Register</a>
        </button>
      </div>
      <button className="md:block hidden register text-xl text-white bg-red px-10 py-2">
        <a href={"/Register"}>Register</a>
      </button>
    </div>
  );
};

export default Navbar;
