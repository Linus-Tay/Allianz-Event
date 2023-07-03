import React from 'react'
import { Fade } from 'react-awesome-reveal'

const About = () => {

  window.scrollTo(0, 0);

  return (
    <div className='bg-neutral-600' id='about'>
        <div className="text-gray-200 grid grid-cols-12 py-8">
            <div className='p-10 col-span-12 md:col-span-4'>
                <p className='sttelemedia text-red-600 pb-2 text-xl font-bold '>UNWIND, CONNECT, AND RECHARGE</p>
                <p className='sttelemedia text-lg font-light'>Journey with us on a 2D1N beach
staycation built for the spirit of
togetherness with exhilarating team
building activities to foster lasting
camaraderie on Day 1, indulging in selfcare and relaxation as you recharge your
energy by the seaside on Day 2.
<br/><br/><span className='font-bold italic'>Please register by 4 July 2023 to secure your 1-night stay as part of the event. Any requests after 4 July 2023 will automatically be rejected, and will only be considered on a case-by-case basis.</span>
                </p>
            </div>
            <div className='p-10 col-span-12 md:col-span-4'>
                <p className='sttelemedia text-red-600 pb-2 text-xl font-bold'>WHERE</p>
                <p className='sttelemedia text-lg '> Events & activities: Ola Beach Club<br/><br/>
Accommodation: Village Hotel Sentosa
                </p>
                <p className="sttelemedia italic">Check out by 12pm, 15th July 2023</p>
            </div>
            <div className='p-10 col-span-12 md:col-span-4'>
                <p className='sttelemedia text-red-600 pb-2 text-xl font-bold'>WHEN</p>
                <p className='sttelemedia text-lg'> Day 1: 14 July 2023 (Fri)<br/>Day 2: 15 July 2023 (Sat)<br/><br/>
11am - 1:30pm: Luggage/Bulky bag drop-off at Village Hotel Sentosa<br/>
1:30 - 9pm: Events and activities at Ola Beach Club
                </p>
                
            </div>
        </div>
        <div className='bg-white py-24'>
        <div className='container m-auto'>
          <Fade triggerOnce duration={1000}>
          <p style={{ letterSpacing: '3px '}} className='text-red-500 font-bold sttelemedia text-center text-4xl'>UNWIND, CONNECT, AND RECHARGE
</p>
          </Fade>
          <Fade triggerOnce duration={3000}>
          <p style={{ color: '#5a5a5a' }} className='sttelemedia pt-8 text-xl text-center text-neutral-600'>
          At STT GDC, we build the strongest foundation that enables customers to
confidently realise their visions for a smarter, more sustainable digital future.
For our customers, it means they don’t have to choose between reliable digital
infrastructure and a healthier, greener planet; they can have both.<br/><br/>
For you, it means you can play an integral role in creating a thriving, sustainable
working environment and fulfil your career aspirations; you can have both.<br/><br/>
The growth of our business in these uncertain times would not have been
possible without each and everyone's steadfastness and resilience in the face of
challenges. Let's embrace this time and opportunity to recharge ourselves,
foster a sense of unity and build camaraderie with one another as we celebrate
our achievements, and continue on an inspiring journey of growth and success
<span className='font-bold'> built with you.</span>
            </p>
          </Fade>
        </div>
    </div>
    </div>
  )
}

export default About
