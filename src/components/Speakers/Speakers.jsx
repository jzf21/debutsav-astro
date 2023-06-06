import React from "react";
import { speakersList } from "./data.jsx";

import { useState } from "react";

const Speakers = () => {
  return (
    <div id="speakers" className="bg-red text-white py-5">
      <h1 className="text-3xl text-center font-semibold p-3">Speakers</h1>
      <div className="flex flex-col md:flex-col ">
        <div className="flex flex-col md:flex-row">
          {speakersList.slice(0, 3).map(({ name, designation, img, url,linkedin }) => (
            <SpeakerCard {...{ name, designation, img, url,linkedin }} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row ">
          {speakersList.slice(3).map(({ name, designation, img, url ,linkedin}) => (
            <SpeakerCard {...{ name, designation, img, url,linkedin }} />
          ))}
        </div>
      </div>
    </div>
  );
};



const SpeakerCard = ({ name, designation, img, url,linkedin }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mt-6 w-fit mx-auto relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[200px] h-[200px] mx-auto">
        {isHovered && (
          <div className="absolute inset-0 bg-white opacity-50 rounded-full transition duration-500"></div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href={`${linkedin}`} // Modify the LinkedIn URL according to your needs
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`h-8 w-8 text-white  fill-current transition -translate-x-6 hover:scale-75  duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href={`${url}`} // Modify the LinkedIn URL according to your needs
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`h-8 w-8 text-white fill-current transition translate-x-6 hover:scale-75 duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771" />
            </svg>
          </a>
        </div>
        <img
          src={img}
          className="rounded-full w-full h-full overflow-hidden object-cover"
          alt={`${name}'s picture`}
        />
      </div>
      <div className="mt-8">
        <h2 className="text-white font-bold text-sm text-center tracking-wide">
          {name}
        </h2>
        <p className="text-center text-gray-400 text-xs mt-2">{designation}</p>
      </div>
    </div>
  );
};




export default Speakers;
