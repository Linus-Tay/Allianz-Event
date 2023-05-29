import React from 'react'
import RS from './images/rs.png'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'


const Contact = () => {
  return (
    <div id="contact" className='py-10 bg-white'>
         <p style={{ letterSpacing: '3px '}} className='mt-20 text-red-500 text-sm font-black sttelemedia   text-center'>CONTACT US</p>
          <p style={{ color: '#5a5a5a' }} className='pt-4 pb-12 sttelemedia text-4xl md:text-5xl font-bold text-center '>Need Some Assistance?</p>
        <div className='container mx-auto'>
        <div className="grid grid-cols-12">
            <div className='col-span-12 md:col-span-4'>
                <div className='flex justify-center mt-10 mb-5'>
                      <img src={RS} alt='' width={100} height={100}/>
                  </div>
                  <div className='text-center'>
                  <p className='sttelemedia font-bold text-2xl'>Company Information:</p>
                      <p>Rain Solutions</p>
                      <p className='sttelemedia italic text-red-600'>www.rainsolutions.org</p>
                  </div>
            </div>
            <div className='col-span-12 md:col-span-4'>
            <div className='flex justify-center mb-5'>
                      <AiFillPhone className='mt-10' size={100}/>
                  </div>
                  <div className='text-center'>
                  <p className='sttelemedia font-bold text-2xl'>Phone Number:</p>
                      <p>Rain</p>
                      <p className='sttelemedia italic text-red-600'>+65 9006 0730</p>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                <div className='flex justify-center mb-5'>
                      <MdEmail className='mt-10' size={100}/>
                  </div>
                  <div className='text-center mb-20'>
                  <p className='sttelemedia font-bold text-2xl'>Email Address:</p>
                        <p>For technical support</p>
                        <p className='sttelemedia italic text-red-600'>support@sttgdcstaffday.com</p>
                  </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Contact