
const BecomeSponsor = () => {
  return (
    <div className="flex flex-col max-w-screen-xl h-[100vh]  px-4 py-8 mt-16  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <h2 className="text-5xl font-bold text-left col-span-12">
        Become a Sponsor
      </h2>
      <p className='w-full text-lg tracking-wide font-light leading-2 my-4'>
        Thank you for your interest in DebConf, the annual conference of the
        Debian Project!<br/> We invite you to sponsor our conference at a level which
        fits your budget and matches your desired level of visibility in our
        community and in the media. We offer several sponsorship levels,
        detailed in the table below, and are also open to other opportunities.
        Our higher levels of sponsorship include the possibility of advertising
        your job openings, and other means of engaging with our broad spectrum
        of participants. DebConf is run on a non-profit basis, and all the
        organizers work as volunteers without compensation. Your contribution
        makes it possible for us to bring together a large number of Debian
        contributors from all over the globe to work together, help and learn
        from each other, and forge friendships. As our project is distributed,
        meeting face to face once a year improves the remote collaboration among
        our contributors during the remainder of the year.
      </p>
  <SponsorTable/>
 
      
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
    <table className="min-w-full divide-y divide-gray-200">
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
          <th>supporter</th>
          <th>bronze</th>
          <th>silver</th>
          <th>gold</th>
          <th>platinum</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <SponsorTableRow
          title="Contribution in INR"
          values={[
            "₹40k to ₹1.5 lakh",
            "₹1.5 lakh",
            "₹4 lakh",
            "₹8 lakh",
            "₹16 lakh",
          ]}
        />
        <SponsorTableRow
          title="Contribution in USD"
          values={["$500 to $2,000", "$2,000", "$5,000", "$10,000", "$20,000"]}
        />
        <SponsorTableRow
          title="Logo on sponsor webpage"
          values={["✓", "", "", "", ""]}
        />
        <SponsorTableRow
          title="Provide materials for conference bags"
          values={["✓", "✓", "", "", ""]}
          startColumn={1}
        />
        <SponsorTableRow
          title="Logo on T-shirts and conference bags"
          values={["", "", "", "", ""]}
          startColumn={2}
        />
        <SponsorTableRow
          title="Presence at the job fair"
          values={["", "", "", "", ""]}
          startColumn={3}
        />
        <SponsorTableRow
          title="Logo on video streams and recordings"
          values={["", "", "", "", ""]}
          startColumn={4}
        />
        <SponsorTableRow
          title="Logo on general conference banners"
          values={["", "", "", "", ""]}
          startColumn={4}
        />
        <SponsorTableRow
          title="Logo on podium banners"
          values={["", "", "", "", ""]}
          startColumn={5}
        />
        <SponsorTableRow
          title="Mention in press releases"
          values={["", "", "", "", ""]}
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
