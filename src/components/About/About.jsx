import React from 'react'

const About = () => {
  return (
    <div className='grid mx-auto min-h-[100vh] px-5 max-w-screen-xl grid-cols-1 md:grid-cols-2 py-5'>
        <div className='text-left'>
            <h2 className='text-3xl md:text-5xl md:text-left text-black font-semibold py-4'>About <span className='text-red'>DebUtsav</span></h2>
            <p className='text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur temporibus, obcaecati tempora aut consequatur quas ea delectus, dolor dolorem sint! Blanditiis ad ullam officia temporibus ut beatae quod iste.</p>

        </div>
        <img src="" alt="" />
        <img src="" alt="" />
        <div className='text-left md:text-right'>
            <h2 className='text-3xl md:text-5xl text-left md:text-right text-black font-semibold py-4'>About <span className='text-yellow'>FOSS MEC</span></h2>
            <p className='text-lg md:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in fugiat rerum itaque sit iste alias. Voluptate sed placeat illo quidem pariatur voluptas, alias, aperiam maiores accusamus cupiditate et fugiat.</p>
        </div>
    </div>
  )
}

export default About