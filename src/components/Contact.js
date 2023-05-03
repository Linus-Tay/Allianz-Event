import React from 'react'
import RS from './images/rs.png'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'


const Contact = () => {
  return (
    <div id="contact" className='bg-white py-10'>
        <p className='special mt-10 text-5xl text-center'>Contact Us</p>
        <span className='line'></span>
        <div className='container mx-auto'>
        <div className="grid grid-cols-12">
            <div className='col-span-12 md:col-span-4'>
                <div className='flex justify-center mt-10 mb-5'>
                      <img src={RS} alt='' width={100} height={100}/>
                  </div>
                  <div className='text-center'>
                  <p className='font-bold text-2xl'>Company Information:</p>
                      <p>Rain Solutions</p>
                      <p className='italic text-blue-600'>www.rainsolutions.org</p>
                  </div>
            </div>
            <div className='col-span-12 md:col-span-4'>
            <div className='flex justify-center mb-5'>
                      <AiFillPhone className='mt-10' size={100}/>
                  </div>
                  <div className='text-center'>
                  <p className='font-bold text-2xl'>Phone Number:</p>
                      <p>Rain</p>
                      <p className='italic text-blue-600'>+65 9006 0730</p>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                <div className='flex justify-center mb-5'>
                      <MdEmail className='mt-10' size={100}/>
                  </div>
                  <div className='text-center mb-20'>
                  <p className='font-bold text-2xl'>Email Address:</p>
                        <p>For technical support</p>
                        <p className='italic text-blue-600'>events@rainsolutions.org</p>
                  </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Contact