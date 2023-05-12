import React from 'react'

const Speakers = () => {
  return (
    <div className='bg-red text-white '>
        <h1>Speakers</h1>
        <div className='flex flex-col md:flex-row justify-evenly'>
            <SpeakerCard/>

        </div>
    </div>
  )
}

const SpeakerCard=()=>{
    return (
  
          <div className="mt-6 w-fit mx-auto">
    <div className='rounded-full'>
                <img
              src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1683302715~exp=1683303315~hmac=0488ba43a2670a8ab5283b13eb121b71459988258f7e0a14d1572a8085c079e0"
              className=" rounded-full w-[200px] overflow-hidden "
              alt="profile picture"
              srcset=""
            />
    </div>
       
          <div className="mt-8 ">
            <h2 className="text-white font-bold text-xl text-center tracking-wide">
              Jonathan <br /> Smith
            </h2>
          </div>
        
    
     </div>
    );
}


export default Speakers