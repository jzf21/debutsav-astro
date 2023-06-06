import {tableHeadData, rowData} from "./data.js";

function SponsorTable() {
  return (
  <div className="w-full" style={{overflowX:"auto"}}>
      <table className="table-auto divide-x divide-y border border-gray-200  divide-gray-200 ">
      <thead className="divide-x divide-y divide-gray-200 border-b font-medium">
        <tr className="divide-x divide-y divide-gray-200 bg-red text-white">
          {tableHeadData.map((name) => (
            <th className="px-6 py-4">{name}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {rowData.map((row) => (
          <SponsorTableRow {...row} />
        ))}
      </tbody>
    </table></div>
  );
}

function SponsorTableRow({title, values, icon: Icon, startColumn = 0}) {
  return (
    <tr className="divide-x divide-gray-200">
      <td className="py-2 text-center">{title}</td>
      {values ? (
        values.map((value, index) => (
          <td className="py-2 text-center" key={index + startColumn}>
            {value === "✓" ? <p style={{color: "#4d7c0f"}}>{value}</p> : value}
          </td>
        ))
      ) : (
        <td colSpan={5 - startColumn}>{Icon && <Icon />}</td>
      )}
    </tr>
  );
}

const BecomeSponsor = () => {
  return (
    <div className="flex flex-col max-w-screen-xl min-h-[100vh]  px-4 py-8 mt-16  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
      <h2 className="text-5xl font-bold text-left ">Become a Sponsor</h2>
      <p className="w-full  text-xm md:text-lg tracking-wide font-light leading-2 my-4">
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
          href="https://drive.google.com/file/d/1a_9n1-KkVyQvR9DKvCbvp69vXwnIYqBk/view?usp=sharing"
          target="_blank"
        >
          View Brochure
        </a>
      </button>
    </div>
  );
};

export default BecomeSponsor;
