import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-900' id='about'>
        <div className="text-gray-200 grid grid-cols-12 gap-4 p-10">
            <div className='p-10 col-span-12 md:col-span-6'>
                <p className='text-orange-500 pb-2 text-3xl font-bold '>About the Event</p>
                <p className='text-md font-light'>This biannual event aims to provide you with the latest news in the world of technology. 
                    Join us in this event to keep up with the latest trends and tendencies in the market today.
                </p>
            </div>
            <div className='p-10 col-span-12 md:col-span-3'>
                <p className='text-orange-500 pb-2 text-xl font-bold'>WHERE</p>
                <p className='text-md font-light'> Level 4, Marina Bay Sands Convention Center
                </p>
            </div>
            <div className='p-10 col-span-12 md:col-span-3'>
                <p className='text-orange-500 pb-2 text-xl font-bold'>WHEN</p>
                <p className='text-md font-light'> 1 January 2023 to 3 January 2023
                </p>
            </div>
        </div>

    </div>
  )
}

export default About