import React from "react";
import debutsav from "../../assets/logo.svg";
const About = () => {
  return (
    <div className="grid mx-auto min-h-[100vh] px-5 max-w-screen-xl grid-cols-1 md:grid-cols-2 py-5">
      <div className="text-left">
        <h2 className="text-3xl md:text-5xl md:text-left text-black font-semibold py-4">
          About <span className="text-red">DebUtsav</span>
        </h2>
        <p className="text-lg tracking-wide md:text-lg">
          Welcome to DebUtsav, a celebration of Free and Open Source Software
          (FOSS) organized by FOSSMEC. This unique event brings together
          individuals from the Debian community to collaborate, learn, and
          contribute to the development of FOSS systems. At DebUtsav, attendees
          can participate in a range of exciting opportunities, including
          hands-on workshops, insightful discussions, and engaging talk
          sessions. Our goal is to facilitate the growth of FOSS systems and
          contribute to the advancement of technology. FOSS enthusiasts will
          also have the chance to network with other contributors and exchange
          ideas. By bringing together a diverse community of individuals
          passionate about FOSS, we hope to inspire and encourage the
          development of innovative solutions that have a positive impact on the
          world. Join us at DebUtsav to connect with like-minded individuals and
          become a part of the FOSS movement. Together, we can help shape the
          future of technology for the better.
        </p>
      </div>
      <img src={debutsav} className="mx-auto my-auto h-50 md:h-80 " alt="" />
      <img src="" alt="" />
      <div className="text-left md:text-right">
        <h2 className="text-3xl md:text-5xl text-left md:text-right text-black font-semibold py-4">
          About <span className="text-yellow">FOSS MEC</span>
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
    </div>
  );
};

export default About;
