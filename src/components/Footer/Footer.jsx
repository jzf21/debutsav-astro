import React from "react";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../assets/react.svg";



const Footer = () => {
  return (
    <div className="bg-red relative bottom-0 text-white flex pt-2  flex-col w-full justify-center items-center gap-6">
      <h1 className="text-2xl">DebUtsav</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et{" "}
      </p>
      <div className="flex flex-row justify-center items-center">
        
        <FaLinkedin className="mx-2" />
        <FaTwitter className="mx-2" />
        <FaInstagram className="mx-2" />
      </div>
      <div className="flex flex-row justify-center items-center">
        <a href={"/"} className="mx-2">
          About
        </a>
        <div className="bg-white text-white" />
        <a href={"/"} className="mx-2">
          Sponsors
        </a>
        <a href={"/"} className="mx-2 ">
          Schedule
        </a>
      </div>
      <div className="p-2 text-center flex justify-center items-center w-full bg-[#760D29]">
        Copyright@2023
      </div>
    </div>
  );
};

export default Footer;
