import React from 'react'
import Timeline from './SortedTimeline';
import EventTimeline from './Timeline';


const EventsLayout = () => {
    const set1 = [
      {
        time: "9:30am -10:15am",
        title: "Inauguration Ceremony",
        description: "",
      },
      {
        time: "11:00am - 12:20pm",
        title: "A journey in the world of sync systems",
        description:
          "Speaker: Andrew Bastin, CTO, Hoppscotch h\nLocation: SDPK Hall",
      },
      {
        time: "12:00pm - 1:00pm",
        title: "How I became a Debian Developer, and you could too.",
        description:
          "Speaker: Sahil Dhiman, Debian Developer\nLocation: SDPK Hall",
      },
      {
        time: "1:00pm - 2:00pm",
        title: "Lunch Break",
      },
      {
        time: "2:00pm - 4:30pm",
        title: "Workshop",
        description:
          "Topic: Introduction to self-hosting\nConducted by: Aditya Anilkumar, FOSS contributor\nLocation: CCF Hall",
      },
    ];
    const set2 = [
        {time:"9:30am -10:15am",title:"Inauguration Ceremony",
        description:""
    },
      {
        time: "11:00am - 1:30pm",
        title: "Workshop",
        description:
          "Topic: Securing Debian GNU/Linux Systems while learning to hack the same.\nConducted by: Mufeedh V.H, Founder, Lyminal\nLocation: CCF Hall",
      },
      {
        time: "1:30pm - 2:30pm",
        title: "Lunch Break",
      },
      {
        time: "2:30pm - 3:30pm",
        title: "AI with Malayalam Computing",
        description:
          "Speaker: Kurian Benoy, Volunteer, SMC\nLocation: SDPK Hall",
      },
      {
        time: "3:30pm - 4:30pm",
        title: "A review of anthropology of the Fediverse",
        description:
          "Speaker: Abraham Raji, Debian Developer\nLocation: SDPK Hall",
      },
    ];
  return (
    <>
      <h2 id="EventSchedule" className="text-5xl font-semibold text-center my-5">Event Timeline</h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <h2 className="text-4xl text-center font-semibold my-5">Set 1</h2>
          <Timeline className=" bg-white p-4 shadow-md">
          

            {set1.map((event, index) => (
              <EventTimeline
                key={index}
                leftSideContent={event.time}
                title={event.title}
                description={event.description}
                className={event.description ? "md" : ""}
              />
            ))}
          </Timeline>
        </div>
        <div>
          <h2 className="text-4xl text-center font-semibold my-5">Set 2</h2>
          <Timeline className="p-4 bg-white shadow-md">
          
            {set2.map((event, index) => (
              <EventTimeline
                key={index}
                leftSideContent={event.time}
                title={event.title}
                description={event.description}
                className={event.description ? "md" : ""}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </>
  );
}

export default EventsLayout