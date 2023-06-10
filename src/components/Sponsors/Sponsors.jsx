import fossunited from "../../assets/black-on-white.svg";
import frappe from "../../assets/frappe-logo.svg";
import iedc from "../../assets/iedc.svg";
import adarsh from "../../assets/adarsh.jpeg";

const Sponsors = () => {
  const platinumSponsors = [];
  const goldSponsors = [];
  const silverSponsors = [];
  const bronzeSponsors = [fossunited, frappe];

  const renderSponsors = (sponsors, width) =>
    sponsors?.map((sponsor) => (
      <div
        data-aos="flip-down"
        data-aos-duration="1100"
        className="p-4  md:mx-10 flex"
      >
        <img
          src={sponsor}
          width={width}
          alt="fossunited"
          srcset=""
          className="m-auto	"
        />
      </div>
    ));

  return (
    <div className="max-w-screen-xl flex flex-col px-4 py-8 mx-auto lg:gap-8 ">
      <h2 className="text-4xl font-bold text-center mb-20 uppercase ">
        Sponsors
      </h2>
      <div className="flex flex-col justify-center items-center gap-16">
        {/* <h2 className="text-2xl font-semibold">Platinum</h2>
        <div className="flex flex-col justify-center items-center ">
          {renderSponsors(platinumSponsors, 400)}
        </div>
        <h2 className="text-2xl font-semibold">Gold</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {renderSponsors(goldSponsors, 300)}
        </div>
        <h2 className="text-2xl font-semibold">Silver</h2>
        <div className="grid grid-cols-1  md:grid-cols-2   ">
          {renderSponsors(silverSponsors, 200)}
        </div>
        <h2 className="text-2xl font-semibold">Bronze</h2> */}
        <div className="grid grid-cols-1  md:grid-cols-2     ">
          {renderSponsors(bronzeSponsors, 200)}
        </div>
      </div>
      {/* ----------------------- */}
      <div className="flex flex-col justify-center items-center gap-16 my-4 ">
        <h3 className="text-4xl font-bold text-center  mb-12 uppercase">
          Tech Partners
        </h3>
        {/* <div className="bg-pink-500 w-64 rounded-lg shadow-lg p-6 "> */}
        <div className="flex flex-col justify-center items-center gap-16 ">
          <img
            className="w-44 h-44 rounded mx-auto mb-4  "
            src={iedc}
            alt="IEDC"
          />
        </div>
      </div>
      {/* ----------------------- */}

      <div className="flex flex-col justify-center items-center gap-16 my-4 ">
        <h3 className="text-4xl font-bold text-center mb-16 uppercase">
          Special Thanks to
        </h3>
        <div className="bg-pink-500 w-64 rounded-lg shadow-lg p-6">
          <img
            className="w-36 h-36 rounded-full mx-auto mb-4 outline outline-8 outline-red "
            src={adarsh}
            alt="Profile Picture"
          />
          <h2 className="text-black text-lg text-center font-semibold">
            Adarsh S
          </h2>
          <p className="text-black text-sm text-center">FOSSMEC Alumni</p>
          {/* <div className="mt-4 flex justify-center">
            <a
              href="#"
              className="bg-white text-pink-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-100"
            >
              Follow
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
