import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const HomePage = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#e44141]'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-6xl font-bold text-[#ccd6f6]'> Ethan Martin </h1>
        <h2 className='text-3xl text-[#55f5df]'> I'm a frontend developer</h2>
        <p className='text-[#55f5df]'> Just filling this out to see how it will look on the site</p>
         <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'> 
            View my other projects 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
             </button>
         </div>
        </div>
    </div>
  )
}

export default HomePage