import React from 'react';
import HTMLImage from '../assets/html.png';
import CSSImage from '../assets/css.png';
import JavaScriptImage from '../assets/javascript.png';
import ReactImage from '../assets/react.png';
import NodeImage from '../assets/node.png';
import MongoImage from '../assets/mongo.png';
import AwsImage from '../assets/aws.png';
import TailWindImage from '../assets/tailwind.png';


function Skills() {
    return (
        <div name="skills" className='w-full h-screen text-gray-300'>
         <div className=' flex flex-col p-4 justify-center items-center h-full w-full'>
             <div className='md:text-center'>
                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                 <p className='pt-2'>These are the technologies that I worked on</p>
             </div>
             <div className=' max-w-[1000px] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-6 column  items-center justify-center py-4 cursor-pointer'>
                <div className='flex flex-col items-center shadow-md shawdow-[#040c16] hover:scale-110 duration-500'>
                 <img className="w-20 mx-auto" src={HTMLImage} alt='html' size='300'/>
                 <p>HTML</p>
             </div>
             <div className='flex flex-col items-center shadow-md shawdow-[#040c16] hover:scale-110 duration-500'>
                 <img className="w-20 mx-auto" src={CSSImage} alt='html' size='300'/>
                 <p>CSS</p>
             </div>
             <div className='flex flex-col items-center shadow-md shawdow-[#040c16] hover:scale-110 duration-500'>
                 <img className="w-20 mx-auto" src={TailWindImage} alt='html' size='300'/>
                 <p>TailWind CSS</p>
             </div>
             <div className='flex flex-col items-center shadow-md shawdow-[#040c16] hover:scale-110 duration-500'>
                 <img className="w-20 mx-auto" src={JavaScriptImage} alt='html' size='300'/>
                 <p>Java Script</p>
             </div>
             <div className='flex flex-col items-center shadow-md shawdow-[#040c16] hover:scale-110 duration-500'>
                 <img className="w-20 mx-auto" src={ReactImage} alt='html' size='300'/>
                 <p>REACT</p>
             </div>
             <div className='flex flex-col items-center shadow-md shawdow-[#040c16] hover:scale-110 duration-500'>
                 <img className="w-20 mx-auto" src={NodeImage} alt='html' size='300'/>
                 <p>NODE JS</p>
             </div>
             <div className='flex flex-col items-center shadow-md shawdow-[#040c16] hover:scale-110 duration-500'>
                 <img className="w-20 mx-auto" src={MongoImage} alt='html' size='300'/>
                 <p>MongoDB</p>
             </div>
             <div className='flex flex-col items-center caps shadow-md shawdow-[#040c16] hover:scale-110 duration-500'>
                 <img className="w-20 mx-auto" src={AwsImage} alt='html' size='300'/>
                 <p>AWS</p>
             </div>
             </div>
         </div>

     </div>
            
    );
}

export default Skills;