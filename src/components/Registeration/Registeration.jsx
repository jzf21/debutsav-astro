import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const RegistrationForm = () => {
  const supabaseurl = import.meta.env.PUBLIC_VITE_SUPABASE_URL;
  const supabasekey = import.meta.env.PUBLIC_VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseurl, supabasekey);
  const [UserDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    veg: true,
    student_or_professional:true ,
    college: "",
    size: "S",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setUserDetails({ ...UserDetails, [e.target.name]: e.target.value });
    console.log(UserDetails);
  };

  const register = async () => {
    console.log("clicked");

    const { data, error } = await supabase
      .from("registered")
      .insert([UserDetails]);
    console.log(UserDetails);
    if (error) {
      console.log(error);
      if (error.code === "23505") {
        alert("Email or Phone number already registered");
      }
      if (error.code === "23514") {
        alert("Please enter valid details");
      }
      if(error.code === "23502"){
        alert("Please enter all details")
      }
      else{
        alert("Please enter valid details")
      }
    } else {
      setError(true);
      console.log("Logged");
    }
  };
  return (
    <div className="w-full  min-h-[100vh] max-w-md mx-auto mt-20 py-5">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 text-red font-bold">Registration Form</h2>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            autoComplete="new-password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            autoComplete="new-password"
            name="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            autoComplete="new-password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="diet">
            Are you a
          </label>
          <select
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="student_or_professional"
            name="student_or_professional"
          >
            <option value={true}>Student</option>
            <option value={false}>Professional</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="college">
            If you are a student then enter your college name
          </label>
          <input
            autoComplete="new-password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="college"
            type="text"
            name="college"
            placeholder="Your college name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="diet">
            Diet
          </label>
          <select
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="diet"
            name="veg"
          >
            <option value={true}>Veg</option>
            <option value={false}>Non-veg</option>
          </select>
        </div>
        {/* github profile */}
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="college">
            Git profile
          </label>
          <input
            autoComplete="new-password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="github"
            type="text"
            name="github"
            placeholder="https://github.com/fossmec"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="college">
            Have you contributed to any FOSS(Free and Open Source) project?
          </label>
          <input
            autoComplete="new-password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="contributions"
            type="text"
            name="contributions"
            placeholder="enter the link to your contribution"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="college">
            Do you use a GNU/Linux distro as your primary OS?
          </label>
          <input
            autoComplete="new-password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="distro"
            type="text"
            name="distro"
            placeholder="distro"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="college">
            Do you have a PGP fingerprint?
          </label>
          <input
            autoComplete="new-password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red"
            id="distro"
            type="text"
            name="pgp"
            placeholder="PGP fingerprint"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red font-bold mb-2" htmlFor="diet">
            Tshirt Size
          </label>
          <select
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-red custom-select"
            id="diet"
            name="size"
          >
            <option value="S">Small </option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:"
            type="button"
          />
        </div>
        <button
          onClick={register}
          className="bg-red  text-white font-bold py-2 px-4 register focus:outline-none focus:shadow-outline"
          type="button"
          disabled={error}
        >
          {error ? "Submitted" : "Submit"}
        </button>
        {error && <p>You Have Registered Sucessfully</p>}
      </form>
    </div>
  );
};
export default RegistrationForm;
