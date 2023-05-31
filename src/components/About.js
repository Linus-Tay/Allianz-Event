import React from 'react'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <div className='bg-gray-900' id='about'>
        <div className="text-gray-200 grid grid-cols-12 gap-4 p-10">
            <div className='p-10 col-span-12 md:col-span-6'>
                <p className='sttelemedia text-red-600 pb-2 text-xl font-bold '>ABOUT</p>
                <p className='sttelemedia text-lg font-light'>Let's set off on a voyage of reconnection, and rediscovery of friendships in the peaceful embrace of nature, admist soaring trees and exquisite beaches of Sentosa.
                </p>
            </div>
            <div className='p-10 col-span-12 md:col-span-3'>
                <p className='sttelemedia text-red-600 pb-2 text-xl font-bold'>WHERE</p>
                <p className='sttelemedia text-lg '> Event Grounds: Ola Beach Club
                </p><br/>
                <p className='sttelemedia text-lg'> Staycation Hotel: Village Hotel Sentosa
                </p>
            </div>
            <div className='p-10 col-span-12 md:col-span-3'>
                <p className='sttelemedia text-red-600 pb-2 text-xl font-bold'>WHEN</p>
                <p className='sttelemedia text-lg'> Event Day: 14 July 2023
                </p><br/>
                <p className='sttelemedia text-lg'> Check Out Day: 15 July 2023
                </p>
                
            </div>
        </div>
        <div className='bg-white py-24'>
        <div className='container m-auto'>
          <Fade triggerOnce duration={1000}>
          <p style={{ letterSpacing: '3px '}} className='text-red-500 text-sm font-bold sttelemedia text-center'>ABOUT THE EVENT</p>
          </Fade>
          <Fade triggerOnce duration={2000}>
          <p style={{ color: '#5a5a5a' }} className='pt-4 sttelemedia text-4xl md:text-5xl font-bold text-center '>[RE]Connect</p>
          </Fade>
          <Fade triggerOnce duration={2500}>
          <p style={{ color: '#5a5a5a' }} className='text-neutral-600 sttelemedia text-2xl pt-4 md:text-3xl font-bold text-center'>"Rekindling Connections: Staff Appreciation Day"</p>
          </Fade>
          <Fade triggerOnce duration={3000}>
          <p style={{ color: '#5a5a5a' }} className='sttelemedia pt-8 text-xl text-center text-neutral-600'>
                Colleagues will convene for a special staff retreat to reestablish the ties that have driven our success. Let's set off on a voyage of reconnection, and rediscovery of friendships in the peaceful embrace of nature, amidst soaring trees and exquisite beaches of Sentosa.
                <br/><br/>
                The day starts out with team-building activities that test boundaries and promote cooperation. Let's re-connect on a deeper level through engaging challenges and shared successes. Together, overcome challenges by relying on mutual trust, clear communication, and group problem-solving abilities. Laughter, inspiration, and a rekindled sense of friendship permeate the space. Realise the value of teamwork and the strength you have as a cohesive unit.
            </p>
          </Fade>
        </div>
    </div>
    </div>
  )
}

export default About
