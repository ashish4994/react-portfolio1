import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

function Hero() {
    return (
        <div name='home' className='bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full h-screen'>
            <div className='flex flex-col justify-center h-full text-white max-w-[1000px] px-32 mx-auto'>
                <p className="text-gray-200 lg:text-xl dark:text-gray-400">Hi my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'> <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Ashok Thota</span></h1>
                <h2 className='text-4xl font-bold opacity-70 mt-2'>I'm a Full Stack Web Developer</h2>
                <p className='mt-2'>I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
          <button className='flex items-center group justify-between gap-2 border-2 text-white bg-black w-fit px-6 py-3 my-2 hover:bg-blue-400 hover:border-blue-400 delay-300'>View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowRight />
            </span>
            </button>
            </div>
        </div>
    );
}

export default Hero;