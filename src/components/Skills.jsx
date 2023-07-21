import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import C from '../assets/C.png'
import Java from '../assets/Java-Logo.png'
import R from '../assets/R_logo.png'

const Skills = () => {
  return (
    <div name = 'skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/*Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>Here are the different languages I have worked with for frontend</p>
            </div>
            {/*Container for all the icons*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                <div className='hover:scale-125 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt = "HTML icon"/>
                    <p className='my-6'>HTML</p>
                </div>
                <div className='hover:scale-125 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt = "HTML icon"/>
                    <p className='my-6'>CSS</p>
                </div>
                <div className='hover:scale-125 duration-300'>
                    <img className='w-20 mx-auto' src={JavaScript} alt = "HTML icon"/>
                    <p className='my-6'>JavaScript</p>
                </div>
                <div className='hover:scale-125 duration-300'>
                    <img className='w-20 mx-auto' src={ReactImg} alt = "HTML icon"/>
                    <p className='my-6'>React</p>
                </div>
                <div className='hover:scale-125 duration-300'>
                    <img className='w-20 mx-auto' src={GitHub} alt = "HTML icon"/>
                    <p className='my-6'>Github</p>
                </div>
            </div>
       
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <p>For non-frontend development related languages</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8'>
            <div className='hover:scale-125 duration-300'>
                <img className='w-20 mx-auto' src={C} alt = "HTML icon"/>
                <p className='my-6'>C</p>
            </div>
            <div className='hover:scale-125 duration-300'>
                <img className='w-20 mx-auto' src={R} alt = "HTML icon"/>
                <p className='my-6'>R</p>
            </div>
            <div className='hover:scale-125 duration-300'>
                <img className='w-20 mx-auto' src={Java} alt = "HTML icon"/>
                <p className='my-6'>Java</p>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Skills