import React from 'react'
import Timeline from './SortedTimeline';
import EventTimeline from './Timeline';


const EventsLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto '>
      <Timeline className="">
        <EventTimeline
          leftSideContent="9:30am-10:30am"
          title="Inaugaration Ceremony "
        />
        <EventTimeline
          leftSideContent="12:00pm-1:00pm"
          title=" A journey in the world of sync systems"
          description="Speaker: Andrew Bastin, CTO, Hopscotch (SDPK Hall)"
          className="md"
        />

        <EventTimeline
          leftSideContent="12:00pm-1:00pm"
          title="12:00pm - 1:00pm: How I became a Debian Developer, and you could too."
          description="Speaker: Sahil Dhiman, Debian Developer (SDPK Hall)"
          index={2}
        />

        <EventTimeline
          title="Lunch Break"
          leftSideContent="1:00pm-2:00pm"
          date={new Date(2020, 7, 5)}
          description=""
          index={3}
        />
        <EventTimeline
          title="Workshop:Introduction to Self Hosting"
          leftSideContent="2:00pm-4:00pm"
          description=" Conducted by: Athul Cyriac Ajay, Platform Engineer, Frappe (CCF Hall)"
        />
      </Timeline>
    </div>
  );
}

export default EventsLayout