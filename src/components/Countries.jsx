// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";



// function Countries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     getCountries();
//   }, []);

//   async function getCountries() {
//     const { data } = await supabase.from("registered").select();
//     setCountries(data);
//     console.log(data[0].name);

//   }

//   return (
//     <div>
//       {countries.map((country) => (
//         <div key={country.id}>
//           <h1>{country.name}</h1>
//           <h2>{country.email}</h2>
//           <h3>{country.phone}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Countries;
