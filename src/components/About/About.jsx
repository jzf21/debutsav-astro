import React from "react";
import debutsav from "../../assets/logo.svg";
import foss from "../../assets/foss.jpeg";
const About = () => {
  return (
    <div className="grid mx-auto min-h-[100vh] px-5 max-w-screen-xl grid-cols-1 md:grid-cols-2 py-5">
      <img
        src={debutsav}
        className="hidden md:block mx-auto my-auto  md:h-80 "
        alt=""
      />
      <div
      
        className="text-left"
      >
        <h2 className="text-3xl md:text-5xl md:text-left text-black font-semibold py-4">
          About <span className="text-red">DebUtsav</span>
        </h2>
        <p className="text-lg tracking-wide  md:text-lg">
          DebUtsav, a conference where the Debian community gathers to celebrate
          Free and Open Source Software (FOSS), will be hosted by Model
          Engineering College. DebUtsav, organized by FOSSMEC is a unique event
          that provides individuals with the chance to collaborate, learn, and
          contribute to the development of the FOSS community. The conference
          will offer attendees a range of exciting opportunities, including
          hands-on-workshops, insightful discussions, and engaging talk
          sessions. FOSS enthusiasts will also have the chance to network with
          other contributors and exchange ideas, which could facilitate the
          growth of FOSS systems and contribute to the
          advancement of technology.
        </p>
      </div>

      <div
      
        className="text-left"
      >
        <h2 className="text-3xl md:text-5xl text-left  text-black font-semibold py-4">
          About <span className="fossmec">FOSS MEC</span>
        </h2>
        <p className="text-lg md:text-lg tracking-wide">
          The Free and Open Source Cell at Model Engineering College
          Kochi(FOSSMEC) is an organization run by a bunch of enthusiastic
          students who promote the use of free and open-source software (FOSS).
          The organization aims to raise awareness about the benefits of FOSS
          and encourage its adoption by everyone. The FOSS Cell conducts regular
          workshops and training programs on various FOSS tools and
          technologies. These events give its attendees the opportunity to learn
          about FOSS from experts, stay up-to-date on the latest developments,
          and explore career opportunities in the field. The FOSS Cell is an
          active and vibrant organization that is committed to promoting the use
          of FOSS and providing students with the skills and knowledge they need
          to succeed in this exciting and rapidly growing field.
        </p>
      </div>
      <img
     
        src={foss}
        className="mx-auto hidden md:block my-auto rounded-full md:h-80"
        alt=""
      />
    </div>
  );
};

export default About;
