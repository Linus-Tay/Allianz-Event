import React from 'react'
import './Footer.css'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='pt-20 footer bg-neutral-600'>
        <div className='container'>
           <div className='bottom'>
                <span className='line'></span>
                <div className='flex sttelemedia justify-center container m-auto'>
                  <p className='flex-initial'><AiFillLinkedin size={26}/></p>
                  <p className='flex-auto'>Share your memorable stories and experiences at STT GDC on LinkedIn and tag us 
<span><a className="underline" href="https://www.linkedin.com/company/sttgdc" target="_blank">@ST Telemedia Global Data Centre!</a></span></p>
                
    </div>
    <p className="sttelemedia">#BuiltForFun #LifeatSTTGDC #EnablingOurDigitalFuture</p>
                <br/>
                 <p className='sttelemedia italic text-sm'>© 2023 STT GDC Pte Ltd</p>
            </div>
   
        </div>
    </div>
  )
}

export default Footer
