import React from "react";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";


import logo from "../../assets/react.svg";



const Footer = () => {

  return (
    <div className="bg-red relative bottom-0 text-white flex pt-2  flex-col w-full justify-center items-center gap-6">
      <h1 className="text-2xl">DebUtsav</h1>
      <p className="text-center">
        Reach us at <a className="hovera:underline-white hover:underline" href="mailto:foss@mec.ac.in">foss@mec.ac.in</a> to know more{" "}
      </p>
      <div className="flex flex-row justify-center items-center">
        <a className="mx-2" href="">
          <svg
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 28.5C6 30.75 6 24.75 3 24M24 33V27.195C24.0563 26.4798 23.9596 25.7607 23.7165 25.0857C23.4734 24.4107 23.0894 23.7952 22.59 23.28C27.3 22.755 32.25 20.97 32.25 12.78C32.2496 10.6858 31.444 8.67183 30 7.15503C30.6838 5.32279 30.6354 3.29755 29.865 1.50003C29.865 1.50003 28.095 0.975029 24 3.72003C20.562 2.78826 16.938 2.78826 13.5 3.72003C9.405 0.975029 7.635 1.50003 7.635 1.50003C6.86456 3.29755 6.81622 5.32279 7.5 7.15503C6.04519 8.68308 5.23878 10.7152 5.25 12.825C5.25 20.955 10.2 22.74 14.91 23.325C14.4165 23.835 14.0359 24.4431 13.793 25.1099C13.55 25.7767 13.4502 26.4871 13.5 27.195V33"
              stroke="#fdd5df"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a className="mx-2 svg-icon" href="#">
          <svg
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.5 4.50001C33.0636 5.51322 31.4732 6.28817 29.79 6.79501C28.8866 5.75627 27.686 5.02005 26.3506 4.6859C25.0151 4.35175 23.6092 4.4358 22.3231 4.92669C21.037 5.41757 19.9327 6.29161 19.1595 7.43058C18.3863 8.56956 17.9815 9.91851 18 11.295V12.795C15.364 12.8634 12.7519 12.2787 10.3965 11.0932C8.04112 9.90763 6.01548 8.15796 4.5 6.00001C4.5 6.00001 -1.5 19.5 12 25.5C8.91079 27.597 5.23074 28.6484 1.5 28.5C15 36 31.5 28.5 31.5 11.25C31.4986 10.8322 31.4584 10.4154 31.38 10.005C32.9109 8.49525 33.9912 6.58908 34.5 4.50001Z"
              stroke="#fdd5df"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a className="mx-2 svg-icon " href="#">
          <svg
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5 3H10.5C6.35786 3 3 6.35786 3 10.5V25.5C3 29.6421 6.35786 33 10.5 33H25.5C29.6421 33 33 29.6421 33 25.5V10.5C33 6.35786 29.6421 3 25.5 3Z"
              stroke="#fdd5df"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 17.055C24.1852 18.3034 23.9719 19.5783 23.3907 20.6985C22.8094 21.8187 21.8898 22.7271 20.7625 23.2945C19.6352 23.8619 18.3577 24.0594 17.1117 23.8589C15.8657 23.6584 14.7147 23.0701 13.8223 22.1778C12.9299 21.2854 12.3416 20.1343 12.1412 18.8883C11.9407 17.6424 12.1381 16.3649 12.7055 15.2376C13.2729 14.1103 14.1813 13.1906 15.3015 12.6094C16.4217 12.0281 17.6967 11.8149 18.945 12C20.2184 12.1889 21.3973 12.7822 22.3076 13.6925C23.2179 14.6027 23.8112 15.7816 24 17.055Z"
              stroke="#fdd5df"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.25 9.75H26.265"
              stroke="#fdd5df"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="flex flex-row justify-center items-center">
        <a href={"/#about"} className="mx-2">
          About |
        </a>
      
        <a href={"/becomesponsor"} className="mx-2">
          Become a Sponsor
        </a>
        <a href={"/"} className="mx-2 ">
           | Schedule
        </a>
      </div>
      <div className="p-2 text-center flex justify-center items-center w-full bg-[#760D29]">
        Copyright@2023
      </div>
    </div>
  );
};

export default Footer;
