import React from 'react'
import './Footer.css'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='pt-20 footer bg-neutral-600'>
        <div className='container'>
            <div className='bottom'>
                <span className='line'></span>
                <div className='flex justify-center container m-auto'>
                  <p className='flex-row'><AiFillLinkedin size={26}/></p>
                  <p className='flex'>Share your memorable stories and experiences at STT GDC on LinkedIn and tag us
<span><a className="inline" href="https://www.linkedin.com/company/sttgdc" target="_blank">@ST Telemedia Global Data Centre!</a></span><br/><br/>#BuiltForFun #LifeatSTTGDC #EnablingOurDigitalFuture</p>
                </div>
                <br/>
                <p className='sttelemedia italic text-sm'>© 2023 STT GDC Pte Ltd</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
