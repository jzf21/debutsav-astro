import  { useState } from "react";
const EventDetails = () => {
  
  return (
    <div
      id="event-details"
      className="py-5 my-10 w-full md:mx-auto md:w-2/3  flex flex-col justify-center space-y-5 "
    >
      <div className="grid grid-cols-3 bg-red bgsvg2 h-auto md:min-h-[100vh] mt-10 pl-0 pr-2 md:pl-10 py-5">
        <div className="flex flex-col col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 bg-white m-5 py-5 pb-20 px-5">
          <h3 className="text-6xl md:text-8xl font-bold text-[#A80030]">
            DEB
            <br />
            UTSAV
            <br />
            2023
          </h3>
          <div className="h-[20px] w-full bg-[#A80030]"></div>
          <div className="flex flex-col gap-4 my-5">
            <div className="flex gap-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M14 13h-4v-4h4v4zm6-4h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v13.386c0 2.391-6.648 9.614-9.811 9.614h-14.189v-23h24zm-2 6h-20v15h11.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-6.543z" />
              </svg>
              <p className="text-xl font-semibold mb-2">June 17th 2023</p>
            </div>

            <div className="flex gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
              <p className="text-xl font-semibold mb-2">
                Model Engineering College , Thrikkakara
              </p>
            </div>
            <button >View Map</button>
          </div>

          <button className="bg-[#A80030] shadow-[10px_10px_1px_00px_rgba(0,0,0,1)] text-[#fff] px-5 py-4  w-[60%] mt-10 ">
            <a href="/Register">REGISTER</a>
          </button>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-red mt-5">Event Details</h2>
        <h3 className="text-xl mt-8">
          <span className="text-red">Date: </span>17th June 2023
        </h3>
        <h3 className="text-xl mt-8">
          <span className="text-red">Time: </span> 9:00am to 6:00pm
        </h3>
        <h3 className="text-xl mt-8">
          <span className="text-red">Venue: </span>Government Model Engineering
          College, Thrikkakara
        </h3>
      </div> */}
      <div className=" w-full md:w-1/2  ">
        { (
          <>
            <iframe
              width="100%"
              height="300"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.32719278335573%2C10.027673598309685%2C76.32970333099365%2C10.029414167476213&amp;layer=mapnik"
            ></iframe>
            <small>
              <a href="https://www.openstreetmap.org/#map=18/10.02840/76.32775">
                View Larger Map
              </a>
            </small>
          </>
        )}
      </div>
    </div>
  );
};



export default EventDetails;
