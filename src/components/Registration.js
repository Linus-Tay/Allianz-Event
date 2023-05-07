import React from 'react'
import Fade from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import Form from './Form'

export const Registration = () => {
    return (
        <div className='p-10'>
        <Fade duration={2000} triggerOnce >
        
        <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-500">
                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
            </Link>
            </li>
            <li aria-current="page">
            <div className="flex items-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span className="ml-1 text-sm font-medium text-orange-500 md:ml-2">Registration</span>
            </div>
            </li>
        </ol>
        </nav>

        <h1 className="special py-10 text-center mb-4 text-4xl font-bold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">Register Now</h1>
            <Form/>
            </Fade>
        </div>
    )
}

export default Registration