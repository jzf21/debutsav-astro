const Events = () => {
  return (
    <div className="      max-w-screen-xl  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12  ">
      <h2 className="text-6xl text-left mb-5">Events</h2>
      <div className="grid grid-cols-2  ">
        <div className="main border border-white w-full rounded-xl h-full "></div>

        <div className="side flex flex-col justify-center gap-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Events;

const EventCard = () => {
  return (
    <div className="flex flex-row justify-center items-center ">
      <div className="w-[80px] h-full bg-white flex-start border border-white "></div>
      <div className="flex flex-col justify-center p-4 rounded-md border border-white">
        <h2>Welcome to Foss</h2>
        <p>Introduction to foss and stuff blah blah</p>
      </div>
    </div>
  );
};
