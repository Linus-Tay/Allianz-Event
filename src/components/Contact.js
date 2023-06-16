import React from 'react'
import {FaWhatsappSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import ReactWhatsapp from 'react-whatsapp';

const Contact = () => {
  return (
    <div id="contact" className='py-10 bg-white'>
         <p style={{ letterSpacing: '3px '}} className='mt-20 text-red-500 text-sm font-black sttelemedia   text-center'>CONTACT US</p>
          <p style={{ color: '#5a5a5a' }} className='pt-4 pb-12 sttelemedia text-4xl md:text-5xl font-bold text-center '>Need some assistance?</p>
        <div className='container mx-auto'>
        <div className="grid grid-cols-12">
            <div className='col-span-12 md:col-span-6'>
            <div className='flex justify-center mb-5'>
                      <FaWhatsappSquare style={{color:"#525252"}} className='mt-10' size={100}/>
                  </div>
                  <div className='text-center'>
                  <p className='sttelemedia font-bold text-2xl'>Phone Number:</p>
                      <p>WhatsApp</p>
                      <ReactWhatsapp className='text-red-600' number="96848323" message="">+65 90060730</ReactWhatsapp>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-6'>
                <div className='flex justify-center mb-5'>
                      <MdEmail style={{color:"#525252"}} className='mt-10' size={100}/>
                  </div>
                  <div className='text-center mb-20'>
                  <p className='sttelemedia font-bold text-2xl'>Email Address:</p>
                        <p>For any queries, please contact us at</p>
                        <p className='sttelemedia italic text-red-600'>support@sttgdcstaffday.com</p>
                  </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Contact
