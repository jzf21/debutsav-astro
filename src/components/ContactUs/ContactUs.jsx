import React from "react";
import contactimg from "../../assets/contact-idea.svg";
const ContactUs = () => {
  return (
    <div id="contact" className="max-w-screen-xl py-5 mx-auto ">
      <h2 className="  text-5xl text-center text-black font-semibold py-4  ">
        Contact Us{" "}
      </h2>
      <div className="flex flex-col md:w-[80%] md:flex-row justify-evenly py-5 mx-auto flex-wrap items-center gap-4">
        <ContactCard
          name="Mekha L"
          designation={"Marketing Head"}
          phone={"9995460475"}
         
        />
        <ContactCard
          name="Jithin Jagadeesh"
          designation={"Chairperson"}
          phone={"9207589302"}
        
        />
        <ContactCard
        name="Abraham Raji"
        designation={"Debian Developer"}
        phone={"6282996058"}/>
      </div>
    </div>
  );
};

export default ContactUs;

const ContactCard = ({name, designation, phone, left}) => {
  return (
    <div
      className="flex flex-row justify-center items-center "
      
    >
      <img
        src={contactimg}
        className="w-[100px] h-auto bg-white flex-start border border-black "
      />
      <div className="flex flex-col justify-center h-[100px]  p-4 min-w-[250px] border-r border-y border-black  ">
        <h2 className="tracking-wider uppercase font-semibold">{name}</h2>
        <p>{designation}</p>
        <p className="font-semibold text-xs mt-2">
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
    </div>
  );
};
