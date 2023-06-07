import fossunited from '../../assets/black-on-white.svg'

const Sponsors = () => {
  const platinumSponsors = [
  
  ];
  const goldSponsors = [
   
  ];
  const silverSponsors = [

  ];
  const bronzeSponsors = [
    fossunited,
  ];

  const renderSponsors = (sponsors, width) =>
    sponsors?.map((sponsor) => (
      <div
        data-aos="flip-down"
        data-aos-duration="1500"
        className="p-4  md:mx-10"
      >
        <img src={sponsor} width={width} alt="fossunited" srcset="" />
      </div>
    ));

  return (
    <div className="max-w-screen-xl flex flex-col px-4 py-8 mx-auto lg:gap-8 ">
      <h2 className="text-4xl font-bold text-center mb-20 uppercase ">Sponsors</h2>
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
        <div className="grid grid-cols-1    ">
          {renderSponsors(bronzeSponsors, 200)}
        </div>
      </div>

    </div>
  );
};

export default Sponsors;
