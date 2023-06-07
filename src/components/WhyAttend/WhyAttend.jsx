import React from 'react'

const WhyAttend = () => {
    const debUtsavInformation = [
      {
        id: 1,
        title: "Talk session by Professionals",
        description:
          "At DebUtsav, you'll have the opportunity to attend talk sessions conducted by experienced professionals from various industries.",
      },
      {
        id: 2,
        title: "Awesome Swags",
        description:
          "DebUtsav provides attendees with some awesome swags, such as T-shirts, stickers, and other merchandise. These souvenirs not only serve as a reminder of the event but also help to build a sense of community among attendees.",
      },
      {
        id: 3,
        title: "Networking with Industry Experts",
        description:
          "DebUtsav provides a great platform for networking with industry experts and like-minded individuals. You'll have the chance to meet and interact with professionals from various fields, exchange ideas, and build your professional network.",
      },
      {
        id: 4,
        title: "Certificate for Workshops and Activity Points",
        description:
          "DebUtsav Workshops will help you gain valuable experience that you can add to your resume. Additionally, you'll receive a certificate of completion that can be used to showcase your new skills to potential employers. For all those who are worried about activity points, this is the chance!",
      },
    ];

  return (
    <>
    <h2 className='text-4xl font-semibold text-center uppercase my-10'>Why Attend? </h2>
      <div className="grid grid-cols-2 gap-8 ">
        <WhyAttendCard
          title="Learn"
          description="Learn from the best in the industry and get a chance to interact with them."
        />
        <WhyAttendCard
          title="Network"
          description="Network with like minded people and build your network."
        />
        <WhyAttendCard
          title="Fun"
          description="Have fun with the community and make new friends."
        />
        <WhyAttendCard
          title="Swags"
          description="Get a chance to win some cool swags."
        />
      </div>
    </>
  );
}

const WhyAttendCard = ({ title, description }) => {
    return (
      <div class="bg-white rounded-lg shadow p-6 mx-auto w-[400px]">
        <h2 class="text-xl font-semibold mb-2">Awesome Swags</h2>
        <p class="text-gray-600">
          DebUtsav provides attendees with some awesome swags, such as T-shirts,
          stickers, and other merchandise. These souvenirs not only serve as a
          reminder of the event but also help to build a sense of community
          among attendees.
        </p>
      </div>
    );
}


export default WhyAttend
