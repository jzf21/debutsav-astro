import React from "react";

const Speakers = () => {
   const speakersList = [
  {
    name: "Andrew Batsin",
    designation: "CTO, Hoppscotch",
    img: "https://avatars.githubusercontent.com/u/9131943?v=4"
  },
  {
    name: "Athul Cyriac Ajay",
    designation: "Platform Engineer, Frappe",
    img: "https://avatars.githubusercontent.com/u/40897573?v=4"
  },
  {
    name: "Abraham Raji",
    designation: "Debian Developer",
    img: "https://avatars.githubusercontent.com/u/32333507?v=4"
  },
  {
    name: "Sahil Dhiman ",
    designation: "Debian Developer",
    img: "https://seccdn.libravatar.org/avatar/fc0d3b6f6314f9f146ae50f07385f6a0?d=mm&s=96"
  },
]
  return (
    <div id="speakers" className="bg-red text-white py-5 ">
      <h1 className="text-3xl text-center font-semibold p-3">Speakers</h1>
      <div
        className="flex flex-col md:flex-row justify-evenly"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        {speakersList.map(({ name, designation, img }) => (
          <SpeakerCard {...{ name, designation, img }} />
        ))}
      </div>
    </div>
  );
};

const SpeakerCard = ({name, designation, img}) => {
  return (
    <div
      className="mt-6 w-fit mx-auto"
      // data-aos="zoom-in"
      // data-aos-duration="1000"
    >
      <div className=" outline outline-white outline-8 rounded-full">
        <img
          src={img}
          className=" rounded-full w-[200px] h-[200px] overflow-hidden "
          alt="profile picture"
          srcset=""
        />
      </div>

      <div className="mt-8 ">
        <h2 className="text-white font-bold text-sm text-center tracking-wide">
          {name}
        </h2>
        <p className="text-center text-gray-400 text-xs mt-2">{designation}</p>
      </div>
    </div>
  );
};

export default Speakers;
