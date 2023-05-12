import image from'../../assets/Conference-amico.svg'
const Hero = () => {
  return (
    <>
      <div className=" text-black mt-10 sm:mt-10 lg:mt-10  py-16 md:mt-10 xl:mt-4 md:py-10  ">
        <div className="grid max-w-screen-xl min-h-[100vh]  px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-semibold  text-black md:text-6xl xl:text-7xl  ">
              Welcome to <br /> <span className="text-red">DebUtsav</span> 2023
            </h1>
            <p className="text-xl font-semibold mb-2">June 17th 2023</p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              FOSS MEC is a non-profit foundation that aims at promoting and
              strengthening the Free and Open Source Software (FOSS) ecosystem
              among MECians.
            </p>
            <div className="flex gap-2">
              <button className="inline-flex register bg-red text-white  text-red-500 items-center justify-center px-10 py-3 mr-3 text-xl font-medium text-center   bg-primary-700 hover:bg-primary-800 ">
                Register
                {/* <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
              </button>
              <button className="inline-flex register bg-transparent outline-maroon outline text-maroon  items-center justify-center px-10 py-3 mr-3 text-xl font-medium text-center   ">
                <a href="/Schedule">About</a>
                {/* <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
              </button>
            </div>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a> */}
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt="mockup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
