import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    /* Use state to determine clicks for hamburger menu*/
    const[nav,setNav] = useState(false)
    const handleClick = ()=> setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e346d] text-gray-500'>
        <div>
            <img src={Logo} alt= 'Logo' style={{ width: '200px' }} />
        </div>

        {/* Navbar menu*/}
            <ul className='hidden md:flex'>
                <li>Home </li>
                <li>About </li>
                <li>Skills </li>
                <li>Work </li>
                <li>Contact me </li>

            </ul>

        {/*Hamburger menu icon*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

        {/*Mobile menu icon*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0e346d] flex flex-col justify-center items-center'}>
            <li className='py-6 text-3xl'>Home </li>
            <li className='py-6 text-3xl'>About </li>
            <li className='py-6 text-3xl'>Skills </li>
            <li className='py-6 text-3xl'>Work </li>
            <li className='py-6 text-3xl'>Contact me </li>
        </ul>

         {/*Social icon*/}
         <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Linkedin <FaLinkedin size={30} />
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1f1e1e]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Github <FaGithub size={30} />
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#693c3c]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Email <HiOutlineMail size={30} />
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a3633f]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              CV <BsFillPersonLinesFill size={30} />
            </a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar