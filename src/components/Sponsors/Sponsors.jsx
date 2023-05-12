const Sponsors = () => {
  const platinumSponsors = [
    "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0",
    "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0"
  ];
  const goldSponsors = [
    "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0",
    "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0"
  ];
  const silverSponsors = [
    "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0",
    "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0",
    "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0",
    "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0",
  ];

  const renderSponsors = (sponsors, width) =>
    sponsors.map((sponsor) => (
      <div className="p-4 md:p-10 md:mx-10">
        <img src={sponsor} width={width} alt="" srcset="" />
      </div>
    ));

  return (
    <div className="max-w-screen-xl flex flex-col px-4 py-8 mx-auto lg:gap-8 ">
      <h1 className="text-4xl font-bold text-center mb-20">Sponsors</h1>
      <div className="flex flex-col justify-center items-center gap-16">
        <h2 className="text-2xl font-semibold">Platinum</h2>
        <div className="flex flex-col justify-center items-center ">
          {renderSponsors(platinumSponsors,400)}
        </div>
        <h2 className="text-2xl font-semibold">Gold</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {renderSponsors(goldSponsors,300)}
        </div>
        <h2 className="text-2xl font-semibold">Silver</h2>
        <div className="grid grid-cols-1  md:grid-cols-2   ">
          {renderSponsors(silverSponsors,200)}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
