import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='pt-20 footer bg-gray-900'>
        <div className='container'>
            <div className='bottom'>
                <span className='line'></span>
                <p>© 2023 Singapore Technologies Telemedia Pte Ltd</p>
                <p className='text-sm italic'>Designed by <a href="https://www.linkedin.com/in/linustay/" className='text-blue-700'>Linus Tay</a  ></p>
            </div>
        </div>
    </div>
  )
}

export default Footer