import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-900' id='about'>
        <div className="text-gray-200 grid grid-cols-12 gap-4 p-10">
            <div className='p-10 col-span-12 md:col-span-6'>
                <p className='text-red-600 pb-2 text-3xl font-bold '>About the Event</p>
                <p className='text-xl font-light'>Colleagues will convene for a special staff retreat to reestablish the ties that have driven our success. Let's set off on a voyage of reconnection, and rediscovery of friendships in the peaceful embrace of nature, amidst soaring trees and exquisite beaches of Sentosa.
                </p>
            </div>
            <div className='p-10 col-span-12 md:col-span-3'>
                <p className='text-red-600 pb-2 text-xl font-bold'>WHERE</p>
                <p className='text-xl font-light'> Ola Beach Club, Sentosa 
                </p>
            </div>
            <div className='p-10 col-span-12 md:col-span-3'>
                <p className='text-red-600 pb-2 text-xl font-bold'>WHEN</p>
                <p className='text-xl font-light'> 14 July 2023, Friday 
                </p>
            </div>
        </div>

    </div>
  )
}

export default About
