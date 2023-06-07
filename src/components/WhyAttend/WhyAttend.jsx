import React from 'react'

const WhyAttend = () => {
    const debUtsavInformation = [
      {
        id: 1,
        title: "Learning Oppurtunities",
        description:
          "At DebUtsav, you'll have the opportunity to attend talk sessions conducted by experienced professionals from various industries.You can gain valuable insights, learn about new developments, and expand your knowledge in areas that interest you.",
      },
      {
        id: 2,
        title: "Awesome Swags",
        description:
          "DebUtsav provides attendees with some awesome swags, such as T-shirts, stickers, and other merchandise. These souvenirs not only serve as a reminder of the event but also help to build a sense of community among attendees.",
      },
      {
        id: 3,
        title: "Interact with Industry Experts",
        description:
          "DebUtsav provides a great platform for interacting with industry experts and like-minded individuals. You'll have the chance to meet and interact with professionals from various fields, exchange ideas, and build your professional network.",
      },
      {
        id: 4,
        title: "Collaboration",
        description:
          "DebUtsav provides a platform for collaboration and cooperation among attendees. You can participate in discussions, contribute to ongoing projects, and even initiate new collaborations. It's an excellent opportunity to work with others who share your passion for open-source software.",
      },
    ];

  return (
    <>
    <h2 className='text-4xl font-semibold text-center uppercase my-10'>Why Attend DebUtsav? </h2>
      <div className="flex flex-col md:grid    md:grid-cols-2 gap-8  justify-center items-center md:w-[60%] mx-auto   ">
        {debUtsavInformation.map((info) => (
            <WhyAttendCard title={info.title} description={info.description} />
        ))}
      </div>
    </>
  );
}

const WhyAttendCard = ({ title, description }) => {
    return (
      <div className="  w-[370px] h-[370px] rounded-lg pt-2 ">
        <div class="bg-white flex flex-col justify-center bg-gradient-to-b from-[#fc8385] to-red rounded-lg shadow p-6 mx-auto w-[350px] h-[350px] my-auto ">
          <h2 class="text-xl text-white font-semibold mb-2 text-center px-4">{title}</h2>
          <p class="text-[#f6f6f6] text-center">{description}</p>
        </div>
      </div>
    );
}


export default WhyAttend
