import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Content = () => {
  return (
    <div id="content" className='bg-white py-10'>
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
          <p style={{ color: '#5a5a5a' }} className='pt-8 text-xl text-center text-neutral-600'>
                Colleagues will convene for a special staff retreat to reestablish the ties that have driven our success. Let's set off on a voyage of reconnection, and rediscovery of friendships in the peaceful embrace of nature, amidst soaring trees and exquisite beaches of Sentosa.
                <br/><br/>
                The day starts out with team-building activities that test boundaries and promote cooperation. Let's re-connect on a deeper level through engaging challenges and shared successes. Together, overcome challenges by relying on mutual trust, clear communication, and group problem-solving abilities. Laughter, inspiration, and a rekindled sense of friendship permeate the space. Realise the value of teamwork and the strength you have as a cohesive unit.
            </p>
          </Fade>
        </div>
    </div>
  )
}

export default Content
