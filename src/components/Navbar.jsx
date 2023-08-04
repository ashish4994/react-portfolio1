import React, { useState } from 'react';
import Logo from '../assets/AT.png';
import {FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'; 
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

function Navbar() {
const [nav,setNav] = useState(false);
const handleClick = () =>{
    setNav(!nav);
}

    return (
        <div className='fixed w-full h-[80px] flex px-5 justify-between items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white'>
        
        <div>
        <img src={Logo} alt="logo-img" style={{width: '50px'}}/>
        </div>

            <ul className='hidden md:flex gap-4'>
                <li><Link to='home' smooth={true} duration={500}> Home </Link></li>
                <li><Link to='about' smooth={true} duration={500}> About </Link></li>
                <li><Link to='skills' smooth={true} duration={500}> Skills </Link></li>
                <li><Link to='work' smooth={true} duration={500}> Work </Link></li>
                <li><Link to='contact' smooth={true} duration={500}> Contact </Link></li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
               {!nav ? <FaTimes /> : <FaBars />}
            </div>
            
            <ul className= {nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col gap-6 text-4xl justify-center items-center md:hidden'}>  
            <li><Link to='home' smooth={true} duration={500}> Home </Link></li>
                <li><Link onClick={handleClick} to='about' smooth={true} duration={500}> About </Link></li>
                <li><Link onClick={handleClick} to='skills' smooth={true} duration={500}> Skills </Link></li>
                <li><Link onClick={handleClick} to='work' smooth={true} duration={500}> Work </Link></li>
                <li><Link onClick={handleClick} to='contact' smooth={true} duration={500}> Contact </Link></li>
            </ul>

            <div className='hidden lg:flex fixed top-[35%] left-0  flex-col'>
            <a href="https://www.linkedin.com/in/ashokct04/" target ="blank" className='w-[160px] h-[50px] px-3 flex justify-between items-center text-gray-300 ml-[-100px] hover:ml-0 duration-300 cursor-pointer bg-blue-600'>
                LinkedIn
                <FaLinkedin size={30}/>          
            </a>            
            <a href="https://github.com/ashish4994" target ="blank" className='w-[160px] h-[50px] px-3 flex justify-between items-center text-gray-300 ml-[-100px] hover:ml-0 duration-300 cursor-pointer bg-gray-600'>
                Github
                <FaGithub size={30}/>          
            </a>
            <Link className='w-[160px] h-[50px] px-3 flex justify-between items-center text-gray-300 ml-[-100px] hover:ml-0 duration-300 cursor-pointer bg-green-600' to='contact' smooth={true} duration={500}>
                 Email
                <HiOutlineMail size={30}/>   
            </Link>
            <a className='w-[160px] h-[50px] px-3 flex justify-between items-center text-gray-300 ml-[-100px] hover:ml-0 duration-300 cursor-pointer bg-red-600'>
                Resume
                <BsFillPersonLinesFill size={30}/>          
            </a>
            <div>

            </div>
            <div>
                
            </div>
            </div>
        </div>
    );
}

export default Navbar;