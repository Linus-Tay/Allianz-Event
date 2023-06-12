import React, { useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import { Link as Linkto } from 'react-router-dom'
import Logo from './images/STTelemedia.png'
import './Navbar.css'

const Navbar = () => {

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 90
            if (show) {
                setNavBackground('ease-in duration-300 bg-white w-full fixed z-0 top-0 left-0')
            } else {
                setNavBackground('ease-in duration-300 bg-white w-full fixed z-0 top-0 left-0')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
    <div className='header'>
        <nav className="ease-in duration-300 bg-white w-full fixed z-0 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="hero" className="cursor-pointer flex items-center">
            <img src={Logo} className="h-7 md:h-10 md:h-18 md:mr-3" alt="STTelemedia" />
        </Link>
        <div className="flex order-2">
            <Linkto to="registration" className="sttelemedia bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-2 text-white mr-2 text-center">Register</Linkto>
            <span style={{ fontSize: "11px", marginRight:"-10px"}} className='w-24 text-neutral-600 mt-1'>Registration closes on 23 June 2023</span>
            <button onClick={ToggleSidebar}  style={{marginRight:"-20px"}} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                <svg className="w-6 h-6" aria-hidden="true" fill="#525252" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
            </button>
        </div>
        
        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium rounded-lg lg:flex-row lg:space-x-8 lg:mt-0">
            <li className='text-xl cursor-pointer'>
                <Link activeClass="text-red-600" spy={true} offset={-55} smooth={true} duration={500} to="hero" className="sttelemedia text-neutral-600 py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0" aria-current="page">Home</Link>
            </li>
            <li className='text-xl cursor-pointer'>
                <Link activeClass="text-xl md:text-red-600" spy={true} offset={-55} smooth={true} duration={500} to="about" className="sttelemedia text-neutral-600 py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0">About</Link>
            </li>
            <li className='text-xl cursor-pointer'>
                <Link activeClass="text-xl md:text-red-600" spy={true} offset={-90} smooth={true} duration={500} to="programme" className="sttelemedia text-xl text-neutral-600 py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0">Programme</Link>
            </li>
            <li className='text-xl cursor-pointer'>
                <Link activeClass="text-xl md:text-red-600" spy={true} offset={-55} smooth={true} duration={500} to="venue" className="sttelemedia text-xl text-neutral-600 py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0">Venue</Link>
            </li>
            <li className='text-xl cursor-pointer'>
                <Link activeClass="text-xl md:text-red-600" spy={true} offset={-55} smooth={true} duration={500} to="faq" className="sttelemedia text-xl text-neutral-600 py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0">FAQ</Link>
            </li>
            <li className='text-xl cursor-pointer'>
                <Link activeClass="text-xl md:text-red-600" spy={true} offset={-55} smooth={true} duration={500} to="contact" className="sttelemedia text-xl text-neutral-600 py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0">Contact</Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}>
                <div className="sd-body">
                    <ul>
                        <li><Link spy={true} smooth={true} offset={-55} duration={500} onClick={ToggleSidebar} to="hero" className="sttelemedia sd-link text-3xl">Home</Link></li>
                        <li><Link spy={true} smooth={true} offset={-55} duration={500} onClick={ToggleSidebar} to="about" className="sttelemedia sd-link text-3xl">About</Link></li>
                        <li><Link spy={true} smooth={true} offset={-135} duration={500} onClick={ToggleSidebar} to="programme" className="sttelemedia sd-link text-3xl">Programme</Link></li>
                        <li><Link spy={true} smooth={true} offset={-55} duration={500} onClick={ToggleSidebar} to="venue" className="sttelemedia sd-link text-3xl">Venue</Link></li>
                        <li><Link spy={true} smooth={true} offset={-55} duration={500} onClick={ToggleSidebar} to="faq" className="sttelemedia sd-link text-3xl">FAQ</Link></li>
                        <li><Link spy={true} smooth={true} offset={-55} duration={500} onClick={ToggleSidebar} to="contact" className="sttelemedia sd-link text-3xl">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Navbar
