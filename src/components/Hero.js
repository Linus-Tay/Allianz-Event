import React from 'react'
import { Fade } from "react-awesome-reveal";
import './Hero.css'

const Hero = () => {
  return (
    <div className='relative hero' id='hero'>
        <div className='content'>
        <Fade cascade triggerOnce>
        <p className='text-orange-400 special text-6xl font-bold leading-snug'>Staff Appreciation Day 2023</p>
        <p className='text-black text-xl italic pt-7'>Valuing your commitment is our pleasure.</p>
        </Fade>
        </div>
    </div>
  )
}

export default Hero