
const BecomeSponsor = () => {
  return (
    <div className="flex flex-col max-w-screen-xl min-h-[100vh]  px-4 py-8 mt-16  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
      <h2 className="text-5xl font-bold text-left ">Become a Sponsor</h2>
      <p className="w-full text-lg tracking-wide font-light leading-2 my-4">
        DebUtsav, a conference hosted by FOSSMEC aims to bring together
        developers, designers and entrepreneurs to share their ideas and
        expertise. <br></br>
        We invite you to sponsor our conference at a level which fits your
        budget and matches your desired level of visibility in our community and
        in the media. We offer several sponsorship levels and by partnering with
        us, your organization will have the opportunity to showcase your brand
        to a targeted audience of individuals who share your commitment to
        social responsibility, and you will gain significant exposure through
        our marketing and promotional efforts.
        <br></br>In return for your sponsorship, we can offer various benefits,
        such as prominent logo placement on event marketing materials, social
        media posts, and prominent recognition at the event itself. We are also
        happy to offer customized benefits based on your specific needs and
        interests. We believe that our partnership has the potential to achieve
        great things and make a significant impact in our community. <br></br>
        Thank you for your interest in DebUtsav and we look forward to
        collaborate with you to make this event a great success.
      </p>
      <SponsorTable />
      <button className="md:block register self-start text-sm my-4 md:text-xl text-white bg-red px-6 py-4">
        <a
          href={
            "https://drive.google.com/file/d/1tni3oBTDM1N1MWPUCSAU8BNHKfCwtZnn/view?usp=sharing"
          }
          target="_blank"
        >
          View Brochure
        </a>
      </button>
    </div>
  );
}

export default BecomeSponsor

const data = [
  {
    title: "Contribution in INR",
    supporter: "₹40k to ₹1.5 lakh",
    bronze: "₹1.5 lakh",
    silver: "₹4 lakh",
    gold: "₹8 lakh",
    platinum: "₹16 lakh",
  },
  {
    title: "Contribution in USD",
    supporter: "$500 to $2,000",
    bronze: "$2,000",
    silver: "$5,000",
    gold: "$10,000",
    platinum: "$20,000",
  },
  {
    title: "Logo on sponsor webpage",
    supporter: <i className="fa fa-check text-green-500"></i>,
    bronze: <i className="fa fa-check text-green-500"></i>,
    silver: <i className="fa fa-check text-green-500"></i>,
    gold: <i className="fa fa-check text-green-500"></i>,
    platinum: <i className="fa fa-check text-green-500"></i>,
  },
];

function Table() {
  return (
    <table className="min-w-full divide-y divide-gray-200 overflow-auto">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            supporter
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            bronze
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            silver
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            gold
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            platinum
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {row.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {row.supporter}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {row.bronze}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {row.silver}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {row.gold}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {row.platinum}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SponsorTable() {
  return (
    <table className="divide-x divide-y border border-gray-200  divide-gray-200">
      <thead className="divide-x divide-y divide-gray-200">
        <tr className="divide-x divide-y divide-gray-200">
          <th></th>
          <th>Platinum</th>
          <th>gold</th>
          <th>silver</th>
          <th>bronze</th>
          <th>supporter</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <SponsorTableRow
          title="Contribution in INR"
          values={["₹30k", "₹25k", "₹15k", "₹10k", "₹6k "]}
        />
        <SponsorTableRow
          title="Contribution in USD"
          values={["$364.86", "$304.5", "$182.43", "$121.62", "$72.97"]}
        />
        <SponsorTableRow
          title="Logo on sponsor webpage"
          values={["✓", "✓", "✓", "✓", "✓"]}
        />
        <SponsorTableRow
          title="Logo on Delegate Kit"
          values={["✓", "✓", "✓", "✓", "✓"]}
          startColumn={1}
        />
        <SponsorTableRow
          title="Logo on 10 min presentation"
          values={["✓", "✓", "✓", "✓", ""]}
          startColumn={2}
        />
        <SponsorTableRow
          title="Logo on stage backdrop"
          values={["✓", "✓", "✓", "", ""]}
          startColumn={3}
        />
        <SponsorTableRow
          title="Complimentary tickets"
          values={["✓", "✓", "", "", ""]}
          startColumn={4}
        />
        <SponsorTableRow
          title="Logo on promotional materials"
          values={["✓", "✓", "", "", ""]}
          startColumn={4}
        />
        <SponsorTableRow
          title="Standees/Banners at venue"
          values={["✓", "✓", "", "", ""]}
          startColumn={5}
        />
        <SponsorTableRow
          title="Mention in social media release"
          values={["✓", "✓", "", "", ""]}
          startColumn={5}
        />
        <SponsorTableRow
          title="Brochures/Flyers can be distributed"
          values={["✓", "", "", "", ""]}
          startColumn={5}
        />
        <SponsorTableRow
          title="Stall can be set up"
          values={["✓", "", "", "", ""]}
          startColumn={5}
        />
        <SponsorTableRow
          title="Promotion in pre-event session "
          values={["✓", "", "", "", ""]}
          startColumn={5}
        />
        <SponsorTableRow
          title="Logo on speaker's kit"
          values={["✓", "", "", "", ""]}
          startColumn={5}
        />
        <SponsorTableRow
          title="Product promotion in upcoming events by FOSS MEC"
          values={["✓", "", "", "", ""]}
          startColumn={5}
        />
      </tbody>
    </table>
  );
}

function SponsorTableRow({ title, values, icon: Icon, startColumn = 0 }) {
  return (
    <tr className="divide-x divide-gray-200 ">
      <td className='px-2' >{title}</td>
      {values ? (
        values.map((value, index) => <td key={index + startColumn}>{value}</td>)
      ) : (
        <td colSpan={5 - startColumn}>{Icon && <Icon />}</td>
      )}
    </tr>
  );
}
