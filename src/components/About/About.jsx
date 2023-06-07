import React from "react";
import debutsav from "../../assets/debutsav.svg";
import foss from "../../assets/foss.jpeg";
const About = () => {
  return (
    <div
      className="grid mx-auto min-h-[100vh] px-5 max-w-screen-xl grid-cols-1 md:grid-cols-2 py-5"
      
    >
      <img
        src={debutsav}
        className="hidden md:block mx-auto my-auto  md:h-80 "
        alt=""
      />
      <div className="text-left">
        <h2 className="text-3xl md:text-5xl md:text-left text-black font-semibold py-4">
          About <span className="text-red">DebUtsav</span>
        </h2>
        <p className="text-lg tracking-wide  md:text-lg">
          Join us at DebUtsav, the prestigious conference hosted by Model
          Engineering College and organized by FOSSMEC. Celebrate the power of
          Free and Open Source Software (FOSS) as we gather the Debian
          community. Collaborate, learn, and contribute to the development of
          FOSS. Experience workshops, discussions, and engaging sessions,
          fostering networking and advancing technology.
        </p>
      </div>

      <div className="text-left" id="about">
        <h2 className="text-3xl md:text-5xl text-left  text-black font-semibold py-4">
          About <span className="fossmec">FOSS MEC</span>
        </h2>
        <p className="text-lg md:text-lg tracking-wide">
          FOSSMEC, the Free and Open Source Cell at Model Engineering College
          Kochi, is a dynamic student-led organization dedicated to advocating
          the widespread adoption of free and open-source software (FOSS).
          Through engaging workshops and training programs, we empower
          individuals with cutting-edge expertise, enabling them to embrace
          FOSS, remain informed of advancements, and explore promising career
          prospects. Join our vibrant community and unlock the endless
          possibilities of FOSS today.
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
