import React from 'react'

const Speakers = () => {
  return (
    <div id="speakers" className="bg-red text-white py-5 ">
      <h1 className="text-3xl text-center font-semibold p-3">Speakers</h1>
      <div className="flex flex-col md:flex-row justify-evenly">
        <SpeakerCard
          name={"Athul Cyriac Ajay"}
          designation={"DevOps Engineer at Frappe"}
        />
        <SpeakerCard name={"Andrew Bastin"} designation={"CTO, Hoppscotch"} />
        <SpeakerCard name={"Abraham Raji"} designation={"Debian Developer"} />
      </div>
    </div>
  );
}

const SpeakerCard=({name,designation,img})=>{
    return (
  
          <div className="mt-6 w-fit mx-auto">
    <div className=' outline outline-white outline-8 rounded-full'>
                <img
              src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0"
              className=" rounded-full w-[200px] h-[200px] overflow-hidden "
              alt="profile picture"
              srcset=""
            />
    </div>
       
          <div className="mt-8 ">
            <h2 className="text-white font-bold text-sm text-center tracking-wide">
              {name}
            </h2>
            <p className="text-center text-gray-400 text-xs mt-2">
              {designation}
            </p>
          </div>
        
    
     </div>
    );
}


export default Speakers