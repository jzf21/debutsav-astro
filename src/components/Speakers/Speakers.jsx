import React from "react";
import { speakersList } from "./data.jsx";

const Speakers = () => {
  return (
    <div id="speakers" className="bg-red text-white py-5 ">
      <h1 className="text-3xl text-center font-semibold p-3">Speakers</h1>
      <div className="flex flex-col md:flex-row justify-evenly flex-wrap">
        {speakersList.map(({ name, designation, img, url }) => (
          <SpeakerCard {...{ name, designation, img, url }} />
        ))}
      </div>
    </div>
  );
};

const SpeakerCard = ({ name, designation, img, url }) => {
  return (
    <a href={url} className="mt-6 w-fit mx-auto">
      <div className=" outline outline-white outline-8 rounded-full">
        <img
          src={img}
          className=" rounded-full w-[200px] h-[200px] overflow-hidden object-cover"
          alt={`${name}'s picture`}
        />
      </div>
      <div className="mt-8 ">
        <h2 className="text-white font-bold text-sm text-center tracking-wide">
          {name}
        </h2>
        <p className="text-center text-gray-400 text-xs mt-2">{designation}</p>
      </div>
    </a>
  );
};

export default Speakers;
