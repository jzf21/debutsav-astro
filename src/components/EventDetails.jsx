const EventDetails = ({ showMap = false }) => {
  return (
    <div
      id="event-details"
      className="py-5 my-10 w-2/3 mx-auto flex flex-wrap justify-center space-y-5"
    >
      <div className="flex flex-col justify-center items-center">
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
      </div>
      <div className="w-1/2">
        {showMap && (
          <>
            <iframe
              width="100%"
              height="300"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.32719278335573%2C10.027673598309685%2C76.32970333099365%2C10.029414167476213&amp;layer=mapnik"
              style={{ border: "1px solid black" }}
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
