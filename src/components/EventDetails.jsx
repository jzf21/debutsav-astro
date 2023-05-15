const EventDetails = () => {
  return (
    <div className="max-w-screen-2xl py-5 mt-10 flex flex-col justify-center items-center h-[80vh]">
      <h2 className="text-4xl text-red p-5 mt-5">DebUtsav 2023</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.860557766758!2d76.32593747468596!3d10.028363690078526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5006491601%3A0xcf23e14245d4694d!2sGovernment%20Model%20Engineering%20College!5e0!3m2!1sen!2sin!4v1683347066306!5m2!1sen!2sin"
        width="60%"
        height="300"
        allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl text-red p-5 mt-5">Event Details</h2>
        <p>Date: 17th June 2023</p>
        <p>Time : 9:00am to 6:00pm</p>
        <p>Venue: Government Model Engineering College, Thrikkakara</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl text-red p-5 mt-5">Confirmed Speakers</h2>
        {/* <p>Date: 17th June 2023</p>
        <p>Time : 9:00am to 6:00pm</p>
        <p>Venue: GMEC, Thrikkakara</p> */}
      </div>
    </div>
  );
};

export default EventDetails;
