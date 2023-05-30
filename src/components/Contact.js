import React from 'react'
import STTELEMEDIA from './images/STTelemedia.png'
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
                      <img src={STTELEMEDIA} className='p-2' alt=''/>
                  </div>
                  <div className='text-center'>
                  <p className='sttelemedia font-bold text-2xl text-neutral-600'>Company Information:</p>
                      <p>STTelemedia Global Data Centres</p>
                      <a href="www.sttelemediagdc.com" className='sttelemedia italic text-red-600'>www.sttelemediagdc.com</a>
                  </div>
            </div>
            <div className='col-span-12 md:col-span-4'>
            <div className='flex justify-center mb-5'>
                      <AiFillPhone style={{color:"#525252"}} className='mt-10' size={100}/>
                  </div>
                  <div className='text-center'>
                  <p className='sttelemedia font-bold text-2xl'>Phone Number:</p>
                      <p>Name</p>
                      <p className='sttelemedia italic text-red-600'>+65 88888888</p>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                <div className='flex justify-center mb-5'>
                      <MdEmail style={{color:"#525252"}} className='mt-10' size={100}/>
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