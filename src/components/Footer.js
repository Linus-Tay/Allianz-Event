import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pt-20 footer bg-gray-900'>
        <div className='container'>
            <div className='bottom'>
                <span className='line'></span>
                <p>2023 STTelemedia. All rights reserved.</p>
                <p className='text-sm italic'>Designed by <span className='text-blue-700'>Rain Solutions</span></p>
            </div>
        </div>
        <Link to="/scan">lol</Link>
        <Link to="/scan">lol</Link>
    </div>
  )
}

export default Footer