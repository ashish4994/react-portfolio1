import React from 'react';

function Contact() {
    return (
        <div name='contact' className='w-full md:h-screen text-gray-300 bg-[#1e2227] flex justify-center py-24'>
      <form action='https://getform.io/f/bb05b63f-eb30-4122-8906-a1a242ef1205' method='POST' className='flex flex-col max-w-[600px] w-full'>
          <div class="pb-8">
              <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Contact</p>
              <p className='py-2'>Submit the form below or shoot email to ashokctn01@gmail.com</p>
          </div>

          <input className='bg-[#ccd6f6] p-2 text-gray-800' type="text" name="name" placeholder="Name" />
          <input className="bg-[#ccd6f6] my-4 p-2 text-gray-800" type="text" name="email" placeholder="Email" />
          <textarea className='bg-[#ccd6f6] p-2 text-gray-800' rows="10" placeholder='Enter Message' name='Message' />
          <button className='text-white border-2 px-2 py-3 my-6 mx-auto hover:bg-pink-600 flex items-center justify-center'>Lets Connect</button>
           </form>
             
        </div>
    );
}

export default Contact;