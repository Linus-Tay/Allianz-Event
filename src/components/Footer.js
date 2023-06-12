import React from 'react'
import './Footer.css'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='pt-20 footer bg-neutral-600'>
        <div className='container'>
            <div className='bottom'>
                <span className='line'></span>
                <div className='flex justify-center '>
                  <span className='inline-block align-baseline'><AiFillLinkedin size={30}/></span>Share your memorable stories and experiences at STT GDC on LinkedIn and tag us
@ST Telemedia Global Data Centres!

<br/><br/>#BuiltForFun #LifeatSTTGDC #EnablingOurDigitalFuture

                </div>
                <br/>
                <p className='sttelemedia italic text-sm'>© 2023 STT GDC Pte Ltd</p>
            </div>
        </div>
    </div>
  )
}

export default Footer